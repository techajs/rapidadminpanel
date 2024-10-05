import axios from 'axios';
import { signOut } from 'next-auth/react'; // Import signOut from NextAuth
import userData from './utils'; // Adjust the import based on your file structure

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = userData.token; // Retrieve the token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // Return the response as is
  },
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is due to token expiration (401 status)
    if (error.response && error.response.status === 401) {
      // Limit the retry attempts to prevent infinite loop
      if (!originalRequest._retry) {
        originalRequest._retry = false; // Prevent infinite loop
        originalRequest._retryCount = originalRequest._retryCount || 0;

        if (originalRequest._retryCount < 1) { // Limit to 1 retry
          originalRequest._retryCount += 1; // Increment retry count
          try {
            // Attempt to refresh the token
            const refreshToken = userData.token;
            const res = await axiosInstance.get('/admin/token', {
              headers: {
                Authorization: `Bearer ${refreshToken}` // Include the token in the refresh request
              }
            });

            const newToken = res.data.token; // Assuming the new token is in the response data
            console.log(res);
            console.log("New token received:", newToken);

            // Update the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${newToken}`;

            // Update the session token using NextAuth's API
            await updateSessionToken(newToken); // Call function to update session

            return axiosInstance(originalRequest); // Retry the original request
          } catch (err) {
            console.error('Token refresh failed:', err);
            signOut(); // Optionally log out the user if token refresh fails
            return Promise.reject(err);
          }
        } else {
          console.error('Max retry attempts reached. Logging out.');
          signOut(); // Log out the user if the maximum retry attempts are reached
          return Promise.reject(error);
        }
      }
    }
    
    // If the error is not a 401, reject it as is
    return Promise.reject(error); 
  }
);

// Function to update the session token
const updateSessionToken = async (newToken) => {
  const response = await fetch('/api/auth/update-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: newToken }), // Send the new token
  });

  if (!response.ok) {
    throw new Error('Failed to update session token');
  }
};

export default axiosInstance;

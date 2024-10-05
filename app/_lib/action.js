import { signIn } from "next-auth/react";

const  authentication=async (formData)=>{
    const {email,password}=Object.fromEnteries(formData);
    try {
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });
      
          if (res?.ok) {
            window.location.href = "/";
          } else {
            console.error("Failed to login:", result.error);
          }
    } catch (err) {
        console.log(err)
        throw new Error('Somthing went wrong.')
    }
}

export default authentication
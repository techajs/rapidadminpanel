import { getAllVehicleTypes } from "@/app/_lib/action";

export const getVehicleData = () => {
    return new Promise((resolve, reject) => {
      const params = {};
      getAllVehicleTypes(
        params,
        (successResponse) => {
          if (successResponse[0]._success) {
            const data = successResponse[0]._response;
            resolve(data);
          } else {
            reject(new Error("Failed to get vehicle types"));
          }
        },
        (errorResponse) => {
       
          reject(new Error("Error fetching vehicle types"));
        }
      );
    });
  };
  
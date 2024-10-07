import { getEnterprise } from "@/app/_lib/action";

export const getEnterpriseData = ()=>{
    return new Promise((resolve, reject) => {
        const params = {};
        getEnterprise(
          params,
          (successResponse) => {
            if (successResponse[0]._success) {
            
              const data = successResponse[0]._response;
              console.log("data => ",data)
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
}
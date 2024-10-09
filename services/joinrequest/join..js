import { getJoinlist, updateJoinStatus } from "@/app/_lib/action";
export const JoinRequest = async (page, status) => {
  let apiUrl = "/joinrequest/getall";
  let addon=''
  if(parseInt(page) > 0){
    if(status && status!=''){
        addon=`&status=${status}`;
    }
    apiUrl=`/joinrequest/getall?page=${page}${addon}`
  }
  if(status && status!=''){
    if(parseInt(page) > 0){
        addon=`&page=${page}`;
    }
    apiUrl=`/joinrequest/getall?status=${status}${addon}`
  }
  return new Promise((resolve, reject) => {
    const params = {};
    getJoinlist(
      apiUrl,
      params,
      (successResponse) => {
        if (successResponse[0]._success) {
          const data = successResponse[0]._response;
          resolve(data);
        } else {
          reject([]);
        }
      },
      (errorResponse) => {
        reject([]);
      }
    );
  });
};

export const GetDetail = async (ext_id)=>{
  let apiUrl = `/joinrequest/getjoinrequest?ext_id=${ext_id}`;
  
  return new Promise((resolve, reject) => {
    const params = {};
    getJoinlist(
      apiUrl,
      params,
      (successResponse) => {
        if (successResponse[0]._success) {
          const data = successResponse[0]._response;
          resolve(data);
        } else {
          reject([]);
        }
      },
      (errorResponse) => {
        reject([]);
      }
    );
  });
}


export const ChangeStatus = async (role,status,ext_id,reason) =>{
  return new Promise((resolve, reject) => {
    const params = {
      role,
      status,
      ext_id,
      reason
  };
    updateJoinStatus(
      params,
      (successResponse) => {
        if (successResponse[0]._success) {
          const data = successResponse[0]._response;
          resolve(data);
        } else {
          reject([]);
        }
      },
      (errorResponse) => {
        reject([]);
      }
    );
  });
}

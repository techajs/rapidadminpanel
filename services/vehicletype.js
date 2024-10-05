import axiosCall from "@/app/_lib/apiClient";
import { API, HTTPMethod } from "@/app/_lib/constants";

export const getAllVehicleTypes = (params, successCallback, errorCallback) => {
    axiosCall(
      API.vehicletypesUrl,
      HTTPMethod.GET,
      params,
      response => {
        return successCallback(response);
      },
      errorResponse => {
        return errorCallback(errorResponse);
      },
    );
  };
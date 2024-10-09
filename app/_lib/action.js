import React from "react";
import { axiosCall } from "./apiClient";
import { API, HTTPMethod } from "./constants";



export const getAllVehicleTypes = (params, successCallback, errorCallback) => {
  axiosCall(
    API.vehicletypesUrl,
    HTTPMethod.GET,
    params,
    response => {
      successCallback(response);
    },
    errorResponse => {
      errorCallback(errorResponse);
    },
  );
};

export const getEnterprise = (params, successCallback, errorCallback) => {
  axiosCall(
    API.getEnterprise,
    HTTPMethod.GET,
    params,
    response => {
      successCallback(response);
    },
    errorResponse => {
      errorCallback(errorResponse);
    },
  );
};

export const getAdmindashboard = (params, successCallback, errorCallback) => {
  axiosCall(
    API.getAdmindashboard,
    HTTPMethod.GET,
    params,
    response => {
      successCallback(response);
    },
    errorResponse => {
      errorCallback(errorResponse);
    },
  );
};

export const getJoinlist = (url,params, successCallback, errorCallback) => {
  axiosCall(
    url,
    HTTPMethod.GET,
    params,
    response => {
      successCallback(response);
    },
    errorResponse => {
      errorCallback(errorResponse);
    },
  );
};


export const updateJoinStatus = (
  params,
  successCallback,
  errorCallback,
) => {
  axiosCall(
    API.updateJoinStatus,
    HTTPMethod.PUT,
    params,
    response => {
      successCallback(response);
    },
    errorResponse => {
      errorCallback(errorResponse);
    },
  );
};









import { getAdmindashboard } from "./action";

export const HTTPMethod = {POST: 'post',GET: 'get',PUT: 'put',DELETE: 'delete',};
export const API = {
    loginAuthenticateUrl: '/authuser/login',
    signUpUrl: '/authuser/signup',
    signupVerifyUrl: '/authuser/signupverify',
    forgotPasswordUrl: '/authuser/forgotpassword',
    resetPasswordUrl: '/authuser/resetpassword',
    serviceTypeUrl: '/servicetypes',
    locationIdUrl: '/locations',
    orderPickupUrl: '/order',
    viewOrderListUrl: '/order',
    countryList: '/country',
    stateList: '/state',
    cityList: '/city',
    vehicles: '/vehicles',
    viewDeliveryBoyOrderUrl: '/order/deliveryboy/',
    viewConsumerOrderUrl: '/order/consumer/',
    payment: '/payment',
    documentsUpload: '/documents/upload',
    vehicletypesUrl: '/vehicletypes',
    planningSetupUrl: '/planning',
    updateUserProfile: '',
    viewImageUrl: '/documents/view/',
    lookupDataUrl: '/lookup',
    getAllocatedDeliveryBoy: '/order/allocated/details?o=',
    viewOrderDetail: '/order/view/',
    enterprisebranch: '/enterprisebranch/get/',
    enterpriseOrder: '/enterprise/order/',
    getEnterprise: '/enterprise',
    getAdmindashboard:'/admin/dashboard',
    getNotificationUrl: '/notification/list/',
    createDeliveryBoyAddressUrl: '/daddressbook/create',
    getDeliveryBoyAddressListUrl: '/daddressbook/list/',
    addressBookUpdateDeliveryBoyUrl: '/daddressbook/update',
    addressBookUpDeleteDeliveryBoyUrl: '/daddressbook/delete/',
    createConsumerAddressUrl: '/caddressbook/create',
    getConsumerAddressListUrl: '/caddressbook/list/',
    addressBookUpdateConsumerUrl: '/caddressbook/update',
    addressBookUpDeleteConsumerUrl: '/caddressbook/delete/',
    getCompanyListUrl: '/deliveryboy/connections/',
    getDistancePriceListUrl: '/vehicletypes/price/list?d=',
    getFaqListUrl: '/faq',
    enterprisebranchCreate: '/enterprisebranch',
    cancelOrderUrl: '/order/cancel',
    deliveryBoyPlanningSetupDateList: '/order/deliveryboy/plan/list',
    checkPromoCodeUrl: 'promocode/check',
    updateJoinStatus:'/joinrequest/action',
  };


  export const BASE_URL=process.env.NEXT_PUBLIC_API_URL;

  export const  formatDate=(isoString) => {
    const date = new Date(isoString);
  
  // Get day, month, year, hours, and minutes
  const day = String(date.getDate()).padStart(2, '0'); // Ensure two digits
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  
  // Get hours and minutes in 24-hour format
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Construct the formatted string
  return `${day}-${month}-${year} at ${hours}:${minutes}`;
  }
  
 
  export const getRole = (role) => {
    switch (role) {
      case "DELIVERY_BOY":
        return "Delivery boy";
      case "ENTERPRISE":
        return "Enterprise";
      case "CONSUMER":
        return "Pickup & Dropoff";
      default:
        return "Unknown role";
    }
  };
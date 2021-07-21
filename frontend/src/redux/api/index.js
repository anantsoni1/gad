import axios from "axios";

export const url = "http://localhost:8080/api";
export const imageUrl = "http://localhost:8080/";

// HOME
export const getHomeData = () => axios.get(`${url}/getHomeData`);
export const modifyHomeData = (id, data) =>
  axios.put(`${url}/modifyHomeData?id=${id}`, data);

// ABOUT
export const getAboutData = () => axios.get(`${url}/getAboutPageData`);
export const modifyAboutData = (id, data) =>
  axios.put(`${url}/modifyAboutPageData?id=${id}`, data);

// CAREER
export const getCareerData = () => axios.get(`${url}/getCareerPageData`);
export const modifyCareerData = (id, data) =>
  axios.put(`${url}/modifyCareerPageData?id=${id}`, data);

// CONTACT
export const getContactData = () => axios.get(`${url}/getContactDetails`);
export const modifyContactData = (id, data) =>
  axios.put(`${url}/modifyContactDetails?id=${id}`, data);

// PRINCIPAL
export const getPrincipalData = () => axios.get(`${url}/getPrincipalData`);
export const modifyPrincipalData = (id, data) =>
  axios.put(`${url}/modifyPrincipalData?id=${id}`, data);

// ADMISSION
export const getAdmissionData = () => axios.get(`${url}/getAdmissionPageData`);
export const modifyAdmissionData = (id, data) =>
  axios.put(`${url}/modifyAdmissionPageData?id=${id}`, data);

// COVID
export const getCovidData = () => axios.get(`${url}/getCovid`);
export const modifyCovidData = (id, data) =>
  axios.put(`${url}/modifyCovid?id=${id}`, data);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

export const signIn = (formData) => axios.post(`${url}/login`, formData);
export const clientSignUp = (formData) =>
  axios.post(`${url}/client/signup`, formData);
export const driverSignUp = (formData) =>
  axios.post(`${url}/driver/signup`, formData);
export const getEmailOtp = (email) =>
  axios.get(`${url}/get-email-otp?email=${email}`);
export const getPhoneOtp = (phone) =>
  axios.get(`${url}/get-phone-otp?phone=${phone}`);
export const verifyEmailOtp = (otp, email) =>
  axios.post(`${url}/verify-email-otp`, { otp, email });
export const verifyForgotEmailOtp = (otp, email) =>
  axios.post(`${url}/verify-forgot`, { otp, email });
export const verifyPhoneOtp = (otp, email, phone) =>
  axios.post(`${url}/verify-phone-otp?phone=${phone}&email=${email}`, {
    verificationCode: otp,
  });
export const verifyId = (email, body) =>
  axios.post(`${url}/upload-id?email=${email}`, body);
export const addVehicle = (email, body) =>
  axios.post(`${url}/add-vehicle?email=${email}`, body);
export const changePassword = (body) =>
  axios.put(`${url}/change-password`, body);
export const getUsers = () => axios.get(`${url}/admin/get-users`);
export const getUserById = (id) => axios.get(`${url}/admin/get-user?id=${id}`);
export const approveUser = (id) =>
  axios.post(`${url}/admin/approve-user`, {
    id: id,
  });
export const getVehicles = (email) =>
  axios.get(`${url}/get-vehicles?email=${email}`);
export const getAdminRides = () => axios.get(`${url}/admin/get-admin-rides`);
export const getAdminRide = (id) =>
  axios.get(`${url}/admin/get-admin-ride?id=${id}`);
export const addRide = (ride) =>
  axios.post(`${url}/add-ride`, {
    ride: ride,
  });
export const confirmRide = (ride) =>
  axios.post(`${url}/pay`, {
    ride: ride,
  });
export const getRides = (from, to, date) =>
  axios.get(`${url}/get-rides?from=${from}&to=${to}&date=${date}`);
export const getRideById = (id) => axios.get(`${url}/get-ride?id=${id}`);
export const confirmBooking = (booking) =>
  axios.post(`${url}/confirm-ride`, booking);
export const getMyRides = (id) => axios.get(`${url}/get-my-rides?id=${id}`);
export const getUpcomingRides = () => axios.get(`${url}/get-upcoming-rides`);
export const getClientRides = (id) =>
  axios.get(`${url}/get-client-rides?id=${id}`);
export const startRideById = (id, time) =>
  axios.get(`${url}/start-ride?id=${id}&startedAt=${time}`);
export const endRideById = (id, time) =>
  axios.get(`${url}/end-ride?id=${id}&endedAt=${time}`);
export const cancelRideById = (id) => axios.get(`${url}/cancel-ride?id=${id}`);
export const contactUs = (formData) =>
  axios.post(`${url}/contact-us`, { formData });

import axios from "axios";

export const url = "http://localhost:8080/api";
export const imageUrl = "http://localhost:8080/";

// HOME
export const getHomeData = () => axios.get(`${url}/getHomeData`);
export const modifyHomeData = (id, data) =>
  axios.put(`${url}/modifyHomeData?id=${id}`, data);

// GALLERY
export const getGalleryData = () => axios.get(`${url}/getGalleryData`);
export const modifyGalleryData = (id, data) =>
  axios.put(`${url}/modifyGalleryData?id=${id}`, data);

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

// TEAM
export const getTeamData = () => axios.get(`${url}/getTeamPageData`);
export const modifyTeamData = (id, data) =>
  axios.put(`${url}/modifyTeamPageData?id=${id}`, data);

// ADMISSION
export const getAdmissionData = () => axios.get(`${url}/getAdmissionPageData`);
export const modifyAdmissionData = (id, data) =>
  axios.put(`${url}/modifyAdmissionPageData?id=${id}`, data);

// COVID
export const getCovidData = () => axios.get(`${url}/getCovid`);
export const modifyCovidData = (id, data) =>
  axios.put(`${url}/modifyCovid?id=${id}`, data);

// LOGIN
export const signIn = (formData) => axios.post(`${url}/login`, formData);
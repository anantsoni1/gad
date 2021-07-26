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

//Parents
export const getSchoolPolicy = () => axios.get(`${url}/schoolPolicy`);
export const getSchoolNewslater = () => axios.get(`${url}/schoolNewsletter`);
export const getCalender = () => axios.get(`${url}/calendar`);
export const addSchoolPolicy = (data) =>
  axios.post(`${url}/addSchoolPolicy`, data);
export const addSchoolNewslater = (data) =>
  axios.post(`${url}/addSchoolNewsletter`, data);
export const addCalender = (data) => axios.post(`${url}/addCalendar`, data);
export const modifySchoolPolicy = (id, data) =>
  axios.put(`${url}/updateSchoolPolicy?id=${id}`, data);
export const modifySchoolNewslater = (id, data) =>
  axios.put(`${url}/updateSchoolNewsletter?id=${id}`, data);
export const modifyCalender = (id, data) =>
  axios.put(`${url}/updateCalendar?id=${id}`, data);
export const deleteSchoolPolicy = (id) =>
  axios.delete(`${url}/deleteSchoolPolicy?id=${id}`);
export const deleteSchoolNewslater = (id) =>
  axios.delete(`${url}/deleteSchoolNewsletter?id=${id}`);
export const deleteCalender = (id) =>
  axios.delete(`${url}/deleteCalendar?id=${id}`);

// Blogs 
export const addNewBlog = (formData) => axios.post(`${url}/blogs/add`, formData);
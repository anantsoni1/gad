import {
  GET_GALLERY_DATA,
  POST_GALLERY_DATA,
  DELETE_GALLERY_DATA,
  ADD_GALLERY_DATA,
} from "../constants";

export default function HomeReducer(
  state = {
    getGalleryData: null,
    postGalleryData: null,
    deleteGalleryData: null,
    addGalleryData: null,
  },
  action
) {
  switch (action.type) {
    case GET_GALLERY_DATA:
      console.log(action?.data);
      return { ...state, getGalleryData: action?.data };
    case POST_GALLERY_DATA:
      console.log(action?.data);
      return { ...state, postGalleryData: action?.data };
    case ADD_GALLERY_DATA:
      console.log(action?.data);
      return { ...state, addGalleryData: action?.data };
    case DELETE_GALLERY_DATA:
      console.log(action?.data);
      return { ...state, deleteGalleryData: action?.data };
    default:
      return state;
  }
}

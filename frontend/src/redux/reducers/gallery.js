import { GET_GALLERY_DATA, POST_GALLERY_DATA } from "../constants";

export default function HomeReducer(
  state = { getGalleryData: null, postGalleryData: null },
  action
) {
  switch (action.type) {
    case GET_GALLERY_DATA:
      console.log(action?.data);
      return { ...state, getGalleryData: action?.data };
    case POST_GALLERY_DATA:
      console.log(action?.data);
      return { ...state, postGalleryData: action?.data };
    default:
      return state;
  }
}

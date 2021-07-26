import { ADD_NEW_BLOG } from "../constants";

export default function BlogsReducer(
  state = { getBlogsData: null, postBlogsDate: null },
  action
) {
  switch (action.type) {
    case ADD_NEW_BLOG:
      console.log(action?.data);
      return { ...state, addBlogsData: action?.data };
    default:
      return state;
  }
}

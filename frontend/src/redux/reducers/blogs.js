import { ADD_NEW_BLOG , GET_BLOGS , GET_BLOGS_BY_ID ,UPDATE_NEW_BLOG} from "../constants";

export default function BlogsReducer(
  state = { getBlogsData: null, addBlogsData: null , getBlogById : null ,updateBlog: null},
  action
) {
  switch (action.type) {
    case ADD_NEW_BLOG:
      console.log(action?.data);
      return { ...state, addBlogsData: action?.data };
      case GET_BLOGS:
        console.log(action?.data);
        return { ...state, getBlogsData: action?.data };
      case GET_BLOGS_BY_ID:
        console.log(action?.data);
        return { ...state, getBlogById: action?.data };
      case UPDATE_NEW_BLOG:
        console.log(action?.data);
        return { ...state, updateBlog: action?.data };
    default:
      return state;
  }
}

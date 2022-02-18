import { bindActionCreators } from "redux";

export const reducer = (state, action) => {
  switch (((state = []), action.type)) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};

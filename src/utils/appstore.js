import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import suggestionReducer from "./suggestionSlice";
import livechatReducer from "./livechatSlice";
const appstore = configureStore({
  reducer: {
    toggle: toggleReducer,
    suggestion: suggestionReducer,
    livechat: livechatReducer,
  }, // Define your reducers here
});
export default appstore;

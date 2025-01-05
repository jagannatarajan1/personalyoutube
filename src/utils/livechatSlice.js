import { createSlice } from "@reduxjs/toolkit";

const livechatSlice = createSlice({
  name: "livechatSlice",
  initialState: [],
  reducers: {
    toggleLivechat: (state, action) => {
      // Limit state array to 5 items
      if (state.length >= 25) {
        state.shift(); // Remove the first (oldest) item
      }
      state.push(action.payload); // Add the new payload
    },
  },
});

export const { toggleLivechat } = livechatSlice.actions;
export default livechatSlice.reducer;

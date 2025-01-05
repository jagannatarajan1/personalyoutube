import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestionSlice",
  initialState: {},
  reducers: {
    setSelectedSuggestion: (state, action) => {
      //   state = { ...state, ...action.payload };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { setSelectedSuggestion } = suggestionSlice.actions;

export default suggestionSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("allUserLoginInfo")
      ? JSON.parse(localStorage.getItem("allUserLoginInfo"))
      : null,
  },
  reducers: {
    userLoginInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;

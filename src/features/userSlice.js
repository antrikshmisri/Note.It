import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  image: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
    },
    setUserLogout: (state) => {
      state.name = null;
      state.email = null;
      state.image = null;
    },
  },
});

export const { setUser, setUserLogout } = userSlice.actions;

export const selectUser = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectImage = (state) => state.user.image;

export default userSlice.reducer;

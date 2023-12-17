import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  username: null,
  email: null,
  photo_secure_url: null,
  address: null,
  favorites: null,
  isDisable: false,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      // Devuelve un nuevo objeto de estado con los cambios aplicados
      const {
        name,
        username,
        email,
        photo_secure_url,
        address,
        favorites,
        isDisable,
        isAdmin,
      } = action.payload;
      return {
        ...state,
        ...(name ? { name } : {}),
        ...(username ? { username } : {}),
        ...(email ? { email } : {}),
        ...(photo_secure_url ? { photo_secure_url } : {}),
        ...(address ? { address } : {}),
        ...(favorites ? { favorites } : {}),
        ...(isDisable ? { isDisable } : {}),
        ...(isAdmin ? { isAdmin } : {}),
      };
    },
    clearUser(state) {
      // Devuelve un nuevo objeto de estado con los valores reseteados
      return {
        ...state,
        name: null,
        username: null,
        email: null,
        photo_secure_url: null,
        address: null,
        favorites: null,
        isDisable: false,
        isAdmin: false,
      };
    },
  },
});

export const { getUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

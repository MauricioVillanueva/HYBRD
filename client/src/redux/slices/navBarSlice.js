import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: "0.6",
  products: "0.6",
  categories: "0.6",
  contactUs: "0.6",
  aboutUs: "0.6",
  save: "0,6",
  cart: "0.6",
  user: "0.6",
};

const selector = { selected: "1", noSelected: "0.6" };

const appBarSlice = createSlice({
  name: "appBar",
  initialState,
  reducers: {
    switchSelector: (state, action) => {
      const selected = action.payload;

      switch (selected) {
        case "home":
          state.home = selector.selected;
          state.products = selector.noSelected;
          state.categories = selector.noSelected;
          state.contactUs = selector.noSelected;
          state.aboutUs = selector.noSelected;
          state.save = selector.noSelected;
          state.cart = selector.noSelected;
          state.user = selector.noSelected;
          break;
        case "products":
          state.home = selector.noSelected;
          state.products = selector.selected;
          state.categories = selector.noSelected;
          state.contactUs = selector.noSelected;
          state.aboutUs = selector.noSelected;
          state.save = selector.noSelected;
          state.cart = selector.noSelected;
          state.user = selector.noSelected;
          break;
        case "categories":
          state.home = selector.noSelected;
          state.products = selector.noSelected;
          state.categories = selector.selected;
          state.contactUs = selector.noSelected;
          state.aboutUs = selector.noSelected;
          state.save = selector.noSelected;
          state.cart = selector.noSelected;
          state.user = selector.noSelected;
          break;
        case "contactUs":
          state.home = selector.noSelected;
          state.products = selector.noSelected;
          state.categories = selector.noSelected;
          state.contactUs = selector.selected;
          state.aboutUs = selector.noSelected;
          state.save = selector.noSelected;
          state.cart = selector.noSelected;
          state.user = selector.noSelected;
          break;
        case "aboutUs":
          state.home = selector.noSelected;
          state.products = selector.noSelected;
          state.categories = selector.noSelected;
          state.contactUs = selector.noSelected;
          state.aboutUs = selector.selected;
          state.save = selector.noSelected;
          state.cart = selector.noSelected;
          state.user = selector.noSelected;
          break;
        case "save":
          state.home = selector.noSelected;
          state.products = selector.noSelected;
          state.categories = selector.noSelected;
          state.contactUs = selector.noSelected;
          state.aboutUs = selector.noSelected;
          state.save = selector.selected;
          state.cart = selector.noSelected;
          state.user = selector.noSelected;
          break;
        case "cart":
          state.home = selector.noSelected;
          state.products = selector.noSelected;
          state.categories = selector.noSelected;
          state.contactUs = selector.noSelected;
          state.aboutUs = selector.noSelected;
          state.save = selector.noSelected;
          state.cart = selector.selected;
          state.user = selector.noSelected;
          break;
        case "user":
          state.home = selector.noSelected;
          state.products = selector.noSelected;
          state.categories = selector.noSelected;
          state.contactUs = selector.noSelected;
          state.aboutUs = selector.noSelected;
          state.save = selector.noSelected;
          state.cart = selector.noSelected;
          state.user = selector.selected;
          break;
        default:
          break;
      }
    },
  },
});

export const { switchSelector } = appBarSlice.actions;
export default appBarSlice.reducer;

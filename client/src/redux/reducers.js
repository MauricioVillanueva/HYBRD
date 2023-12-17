// src/redux/reducers.js
import { combineReducers } from "redux";
import productsReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import detailReducer from "./slices/detailSlice";
import usersReducer from "./slices/usersSlice";
import { persistReducer } from 'redux-persist';
import filteredReducer from "./slices/filteredSlice";
import storage from 'redux-persist/lib/storage';



const userPersistConfig = {
  key: 'user',
  storage: storage,
};


const rootReducer = combineReducers({
  products: productsReducer,
  user: persistReducer(userPersistConfig, userReducer),
  cart: cartReducer,
  detail: detailReducer,
  filtered: filteredReducer,
  users:usersReducer
});

export default rootReducer;

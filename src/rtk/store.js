import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import cardSlice from "./slices/card-slice";
//---------------------------------------------------------
export const store = configureStore({
  reducer: {
    products: productSlice,
    card: cardSlice,
  },
});

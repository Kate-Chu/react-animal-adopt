import { configureStore } from "@reduxjs/toolkit";
import animalSlice from "./animalSlice";
import modalSlice from "./modalSlice";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
  reducer: {
    animal: animalSlice.reducer,
    modal: modalSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

export default store;

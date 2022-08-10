import { configureStore } from "@reduxjs/toolkit";
import animalSlice from "./animalSlice";
import modalSlice from "./modalSlice";

const store = configureStore({
  reducer: { animal: animalSlice.reducer, modal: modalSlice.reducer },
});

export default store;

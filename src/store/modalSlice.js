import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const modalSlice = createSlice({
  name: "modal_slice",
  initialState: {
    isShow: false,
    data: {},
  },

  reducers: {
    showModal(state, action) {
      state.isShow = true;
      state.data = action.payload;
    },

    hideModal(state) {
      state.isShow = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;

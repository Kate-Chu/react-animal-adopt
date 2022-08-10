import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../data/dummyData.json";

// let animalData = localStorage.getItem("animal_data") || [];

// if (animalData.length === 0) {
//   fetch(
//     "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL"
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       // localStorage.setItem("animal_data", data);
//       animalData = data;
//     });
// }

const animalSlice = createSlice({
  name: "animal_slice",
  initialState: {
    data: [],
    length: 0,
    showData: [],
    currentPage: 1,
  },

  reducers: {
    receiveDefaultData(state) {
      state.data = dummyData;
      state.length = dummyData.length;
      state.showData = dummyData.slice(0, 15);
    },

    changeShowDataByPage(state, action) {
      const start = action.payload * 15 - 15;
      const end = action.payload * 15;
      state.showData = state.data.slice(start, end);
      state.currentPage = action.payload;
    },
  },
});

export const animalActions = animalSlice.actions;

export default animalSlice;

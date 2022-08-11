import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../data/dummyData.json";

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
      //       localStorage.setItem("default_data", JSON.stringify(dummyData));
      //       state.data = dummyData;
      //       state.length = dummyData.length;
      //       state.showData = dummyData.slice(0, 15);
      //     });
      // }

      localStorage.setItem("default_data", JSON.stringify(dummyData));
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

    search(state, action) {
      const defaultData = JSON.parse(localStorage.getItem("default_data"));
      const searchBy = action.payload.searchBy;
      let foundItems = [];
      const searchVariety = action.payload.searchVariety;

      if (searchBy === "kind") {
        const foundKindItems = defaultData.filter(
          (item) => item.animal_kind === searchVariety
        );
        const foundVarietyItems = defaultData.filter((item) =>
          item.animal_Variety.includes(searchVariety)
        );
        foundItems = foundKindItems.concat(foundVarietyItems);
      }

      if (searchBy === "city") {
        foundItems = defaultData.filter((item) =>
          item.animal_place.includes(searchVariety)
        );
      }

      if (foundItems.length === 0) {
        alert("沒有找到相關資料");
      }
      state.data = foundItems;
      state.length = foundItems.length;
      state.showData = foundItems.slice(0, 15);
    },
  },
});

export const animalActions = animalSlice.actions;

export default animalSlice;

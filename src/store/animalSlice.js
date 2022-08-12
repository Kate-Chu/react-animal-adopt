import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import backupData from "../data/backupData";

const OFFICIAL_URL =
  "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL";

export const fetchAnimalData = createAsyncThunk(
  "animal_slice/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(OFFICIAL_URL);
      const data = await response.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("抱歉，目前無法取得資料，請稍後再試");
    }
  }
);

const animalSlice = createSlice({
  name: "animal_slice",
  initialState: {
    data: [],
    length: 0,
    showData: [],
    currentPage: 1,
    isLoading: false,
  },

  reducers: {
    changeShowDataByPage(state, action) {
      const start = action.payload * 15 - 15;
      const end = action.payload * 15;
      state.showData = state.data.slice(start, end);
      state.currentPage = action.payload;
    },

    search(state, action) {
      const storedData = JSON.parse(localStorage.getItem("animal_data"));
      const searchBy = action.payload.searchBy;
      let foundItems = [];
      const searchVariety = action.payload.searchVariety;

      if (searchBy === "kind") {
        const foundKindItems = storedData.filter(
          (item) => item.animal_kind === searchVariety
        );
        const foundVarietyItems = storedData.filter((item) =>
          item.animal_Variety.includes(searchVariety)
        );
        foundItems = foundKindItems.concat(foundVarietyItems);
      }

      if (searchBy === "city") {
        foundItems =
          searchVariety === "all"
            ? storedData
            : storedData.filter((item) =>
                item.animal_place.includes(searchVariety)
              );
      }

      if (foundItems.length === 0) {
        alert("沒有找到相關資料");
        foundItems = state.data;
      }
      state.data = foundItems;
      state.length = foundItems.length;
      state.showData = foundItems.slice(0, 15);
    },
  },

  extraReducers: {
    [fetchAnimalData.fulfilled]: (state, action) => {
      const animalData = action.payload;
      localStorage.setItem("animal_data", JSON.stringify(animalData));
      state.data = animalData;
      state.length = animalData.length;
      state.showData = animalData.slice(0, 15);
      state.isLoading = false;
    },

    // [fetchAnimalData.pending]: (state, action) => {
    //   state.isLoading = true;
    // },

    // [fetchAnimalData.rejected]: (state, action) => {
    //   state.isLoading = false;
    // },
  },
});

export const animalActions = animalSlice.actions;

export default animalSlice;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const URL =
  "https://react-animal-adopt-default-rtdb.asia-southeast1.firebasedatabase.app";

export const fetchFavoriteItem = createAsyncThunk(
  "favorite_slice/fetchFavoriteItem",
  async (item, thunkAPI) => {
    try {
      const response = await fetch(`${URL}/favorites/${item.userId}.json`);
      const data = await response.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("抱歉，目前無法取得資料，請稍後再試");
    }
  }
);

export const addFavoriteItem = createAsyncThunk(
  "favorite_slice/addFavoriteItem",
  async (item, thunkAPI) => {
    try {
      const userId = localStorage.getItem("userId");
      await fetch(
        `${URL}/favorites/${userId}/${item.animalData.animal_id}.json`,
        {
          method: "POST",
          body: JSON.stringify(item.animalData),
        }
      );
      return item.animalData;
    } catch (err) {
      return thunkAPI.rejectWithValue("抱歉，目前無法取得資料，請稍後再試");
    }
  }
);

export const removeFavoriteItem = createAsyncThunk(
  "favorite_slice/removeFavoriteItem",
  async (item, thunkAPI) => {
    try {
      const userId = localStorage.getItem("userId");
      await fetch(`${URL}/favorites/${userId}/${item.id}.json`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return item.id;
    } catch (err) {
      alert(err.message);
    }
  }
);

const favoriteSlice = createSlice({
  name: "favorite_slice",
  initialState: {
    userId: "",
    favorites: [],
  },

  extraReducers: {
    [addFavoriteItem.fulfilled]: (state, action) => {
      state.favorites.push(action.payload.animal_id);
    },

    [removeFavoriteItem.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.favorites = state.favorites.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;

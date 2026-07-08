import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
      });
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    editItem: (state, action) => {
      const { id, text } = action.payload;

      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.text = text;
      }
    },
  },
});

export const { addItem, removeItem, editItem } = listSlice.actions;
export default listSlice.reducer;
// src/listSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {id :'1',
      name : 'Gursewak Singh',
      contact : '828488913',
      age : '35'

    },
    {id :'2',
      name : 'Amandeep Kaur',
      contact : '9771414313',
      age : '35'

    }
  ],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    updateItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addItem, deleteItem, updateItem } = listSlice.actions;

export default listSlice.reducer;
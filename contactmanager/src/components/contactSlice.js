import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  editId: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },

    setEditId: (state, action) => {
      state.editId = action.payload;
    },

    updateContact: (state, action) => {
      const index = state.contacts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.contacts[index] = action.payload;
      }

      state.editId = null;
    },
  },
});

export const {
  addContact,
  deleteContact,
  setEditId,
  updateContact,
} = contactSlice.actions;

export default contactSlice.reducer;
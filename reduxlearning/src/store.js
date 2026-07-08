import { configureStore, createSlice } from '@reduxjs/toolkit';

// 1️⃣ Initial state
const initialState = {
  contacts: [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Carol White', email: 'carol@example.com' }
  ]
};

// 2️⃣ Create a slice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // 👇 This reducer adds a new contact to the list
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    }
    // Later you can add other reducers like deleteContact, editContact, etc.
  }
});

// 3️⃣ Export the action(s) so components can dispatch them
export const { addContact } = contactsSlice.actions;

// 4️⃣ Configure the store
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer
  }
});

// 5️⃣ Selectors – functions to read data from the store
export const selectAllContacts = (state) => state.contacts.contacts;
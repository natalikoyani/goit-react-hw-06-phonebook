import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contacts = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contacts,
  reducers: {
    addContact: {
      reducer(state, action) {

        state.push(action.payload);
      },
      prepare(newContact) {
        return {
          payload: {
            name: newContact.name,
            number: newContact.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
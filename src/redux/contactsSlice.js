import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = [
  { id: '1sflji', name: 'Rosie Simpson', number: '459-12-56' },
  { id: '2sflji', name: 'Hermione Kline', number: '443-89-12' },
  { id: '3sflji', name: 'Eden Clements', number: '645-17-79' },
  { id: '4sflji', name: 'Annie Copeland', number: '227-91-26' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContact: {
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
      reducer(state, action) {
        state = state.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      const idx = state.findIndex(contact => contact.id === action.payload);
      state.splice(idx, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

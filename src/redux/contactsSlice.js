import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { addContact, deleteContact, fetchContacts } from './operations';
// const initialState = [
// { id: '1sflji', name: 'Rosie Simpson', number: '459-12-56' },
// { id: '2sflji', name: 'Hermione Kline', number: '443-89-12' },
// { id: '3sflji', name: 'Eden Clements', number: '645-17-79' },
// { id: '4sflji', name: 'Annie Copeland', number: '227-91-26' },
// ];
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  toast.error(`Ooops, please try again later.`);
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload = [] }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL =
  'https://657c52ad853beeefdb9931de.mockapi.io/contacts/contacts';

const getOption = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}`, getOption);
      if (response.status === 404) {
        throw new Error('Something happened!');
      }
      return await response.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      return await response.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (idEl, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/${idEl}`, {
        method: 'DELETE',
      });
      return await response.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

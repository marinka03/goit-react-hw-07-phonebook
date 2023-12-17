import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});

const addAction = () => {
  return {
    type: 'add',
    payload: fetch('/todo'),
  };
};

const addOperation = text => dispatch => {
  const todo = fetch('/todo');
  dispatch(addAction(todo));
};
addOperation('text');

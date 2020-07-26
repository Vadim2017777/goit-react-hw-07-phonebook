import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  addContactSuccess,
  onRemoveContacts,
  onChangeFilter,
  onAddToLocalStorage,
} from './contactActions';

const addContacts = (state, { payload }) => [...state, payload];

const removeContacts = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

const addToLocalStrg = (state, { payload }) => [...payload];

const onFilter = (state, { payload }) => payload;

const items = createReducer([], {
  [addContactSuccess]: addContacts,
  [onRemoveContacts]: removeContacts,
  [onAddToLocalStorage]: addToLocalStrg,
});

const filter = createReducer('', {
  [onChangeFilter]: onFilter,
});

export default combineReducers({
  items,
  filter,
});

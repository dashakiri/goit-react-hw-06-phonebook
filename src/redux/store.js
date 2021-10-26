import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { contactsReducer, filterReducer } from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

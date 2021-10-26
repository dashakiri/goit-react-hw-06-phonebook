import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReducer, filterReducer } from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

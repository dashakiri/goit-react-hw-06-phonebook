const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = (
  state = INITIAL_STATE.contacts,
  { type, payload },
) => {
  switch (type) {
    case 'addContact':
      return [...state, payload];
    case 'deleteContact':
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

export const filterReducer = (
  state = INITIAL_STATE.filter,
  { type, payload },
) => {
  switch (type) {
    case 'filterContacts':
      return payload;
    default:
      return state;
  }
};

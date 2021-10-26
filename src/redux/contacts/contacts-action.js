import shortid from 'shortid';

export const addContact = (name, number) => ({
  type: 'addContact',
  payload: { id: shortid.generate(), name, number },
});

export const deleteContact = id => ({
  type: 'deleteContact',
  payload: id,
});

export const filterContact = value => ({
  type: 'filterContacts',
  payload: value,
});

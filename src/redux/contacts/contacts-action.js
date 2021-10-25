import shortid from 'shortid';

//  const formSubmitHandler = (name, number) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     setContacts(prevState => [...prevState, contact]);
//   };

export const addContact = (name, number) => ({
  type: 'addContact',
  payload: { id: shortid.generate(), name, number },
});

// const deleteContact = id => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };

export const deleteContact = id => ({
  type: 'deleteContact',
  payload: id,
});

// const onFilterChange = e => {
//     setFilter(e.currentTarget.value);
//   };

export const filterContact = value => ({
  type: 'filterContacts',
  payload: value,
});

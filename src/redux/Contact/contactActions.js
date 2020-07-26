import { createAction } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';

const addContactRequest = createAction('contact/contactAddRequest');
const addContactSuccess = createAction('contact/contactAddSuccess');
const addContactError = createAction('contact/contactAddSucces');

// const onAddContacts = createAction(
//   'contact/addContacts',
//   ({ name, number }) => ({
//     payload: { items: { id: uuidv4(), name, number } },
//   }),
// );

const onAddToLocalStorage = createAction('contact/addToLocalStorage');

const onRemoveContacts = createAction('contact/removeContacts');

const onChangeFilter = createAction('contact/changeFilter');

const onChangeTheme = createAction('contact/changeTheme');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  // onAddContacts,
  onRemoveContacts,
  onChangeFilter,
  onChangeTheme,
  onAddToLocalStorage,
};

import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from './contactActions';

const onFetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('http://localhost:2000/contacts')
    .then(({ data }) => {
      console.log(data);
      dispatch(fetchContactsSuccess(data));
    })
    .catch(error => dispatch(fetchContactsError(error)));
};

const onAddContacts = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('http://localhost:2000/contacts', { name, number })
    .then(response => {
      console.log(response.data);
      dispatch(addContactSuccess(response.data));
    })
    .catch(error => dispatch(addContactError(error)));
};

const onRemoveContacts = id => dispatch => {
  dispatch(removeContactRequest());

  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(error => dispatch(removeContactError(error)));
};

export { onFetchContacts, onAddContacts, onRemoveContacts };

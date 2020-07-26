import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './contactActions';

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

export { onAddContacts };

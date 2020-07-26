import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAddToLocalStorage } from '../redux/Contact/contactActions';

import Header from './Header/Header';
import Body from './Body/Body';
import ContactListForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  componentDidMount() {
    const localStoregeContacts = localStorage.getItem('contacts');
    const { onAddToLS } = this.props;
    if (localStoregeContacts) {
      onAddToLS(JSON.parse(localStoregeContacts));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.props;
    if (contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const showContacts = this.props.contacts.length;
    return (
      <>
        <Header />
        <Body>
          <ContactListForm />
          {showContacts > 1 && <Filter />}
          <ContactList />
        </Body>
      </>
    );
  }
}

const mDTP = { onAddToLS: onAddToLocalStorage };
const mSTP = ({ contacts }) => ({ contacts: contacts.items });

export default connect(mSTP, mDTP)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onFetchContacts } from '../redux/Contact/contactsOperations';

import Header from './Header/Header';
import Body from './Body/Body';
import ContactListForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
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

const mDTP = { fetchContacts: onFetchContacts };
const mSTP = ({ contacts }) => ({ contacts: contacts.items });

export default connect(mSTP, mDTP)(App);

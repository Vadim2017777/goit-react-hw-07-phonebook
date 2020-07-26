import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onRemoveContacts } from '../../redux/Contact/contactActions';

import styleConxt from '../../contex/ThemeContext';

import s from './ContactListItem.module.css';

const TaskListItem = ({ theme, name, number, onRemove }) => (
  <li
    className={s.list_PhoneLs}
    style={{
      color: styleConxt[theme].fontColor,
      background: styleConxt[theme].bodybg,
    }}
  >
    <p>
      {name}:{number}
    </p>

    <button type="button" className={s.buttonPhoneLs} onClick={onRemove}>
      Delete
    </button>
  </li>
);

const mSTP = ({ contacts, themePhonebook }, { id }) => {
  const item = contacts.items.find(item => item.id === id);
  const theme = themePhonebook.theme;

  return { theme, ...item };
};

const mDTP = (dispatch, { id }) => ({
  onRemove: () => dispatch(onRemoveContacts(id)),
});

export default connect(mSTP, mDTP)(TaskListItem);

TaskListItem.defaultProps = {
  contacts: [],
};

TaskListItem.propTypes = {
  onRemove: PropTypes.func,
  theme: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

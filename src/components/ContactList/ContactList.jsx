import React from 'react';
import T from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { filterContacts } from '../FilterContact/filterContact';
import styles from './contactList.module.css';
import slide from '../../Transitions/slide.module.css';

const ContactList = ({ contacts, deleteContactInStore, filterContact }) => {
  const filteredContacts = filterContacts(contacts, filterContact);

  return (
    <TransitionGroup component="ul" className={styles.list}>
      {filteredContacts.map(contact => (
        <CSSTransition
          in
          classNames={slide}
          timeout={250}
          unmountOnExit
          className={styles.item}
          key={contact.id}
        >
          <li className={styles.item} key={contact.id}>
            <div className={styles.text}>{contact.name}</div>
            <span className={styles.number}>{contact.number}</span>
            <button
              className={styles.btn}
              type="submit"
              onClick={() => deleteContactInStore(contact.id)}
            ></button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      name: T.string.isRequired,
      number: T.string.isRequired,
    }),
  ).isRequired,
  deleteContactInStore: T.func.isRequired,
  filterContact: T.string,
};

ContactList.defaultProps = {
  filterContact: '',
};

export default ContactList;

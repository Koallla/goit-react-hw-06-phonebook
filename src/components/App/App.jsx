import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import T from 'prop-types';
import 'pnotify/dist/es/PNotifyAnimate';
import ContactForm from '../ContactForm/ContactFormContainer';
import ContactList from '../ContactList/ContactListContainer';
import Filter from '../Filter/FilterContainer';
import pop from '../../Transitions/pop.module.css';
import styles from './app.module.css';
import '../../Transitions/title.css';

const App = ({ contacts }) => {
  return (
    <div className={styles.container}>
      <CSSTransition in classNames="slide" timeout={500} appear>
        <h1>Phonebook</h1>
      </CSSTransition>
      <ContactForm />
      <h2>Contacts</h2>
      <TransitionGroup>
        {contacts.length > 1 && (
          <CSSTransition timeout={250} classNames={pop}>
            <Filter />
          </CSSTransition>
        )}
      </TransitionGroup>
      <ContactList />
    </div>
  );
};

App.propTypes = {
  contacts: T.arrayOf(T.shape({})).isRequired,
};

export default App;

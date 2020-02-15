import React, { Component } from 'react';
import PNotify from 'pnotify/dist/es/PNotify';
import throttle from 'lodash.throttle';
import shortid from 'short-id';
import T from 'prop-types';
import { findToMatch } from '../FilterContact/filterContact';
import styles from './contactForm.module.css';
import 'pnotify/dist/PNotifyBrightTheme.css';

class ContactForm extends Component {
  static propTypes = {
    addContactInStore: T.func.isRequired,
    contacts: T.arrayOf(T.shape({})).isRequired,
    getDataOfLocalStorage: T.func.isRequired,
    checksContact: T.func.isRequired,
    messageInputName: T.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  componentDidMount() {
    const { getDataOfLocalStorage } = this.props;
    try {
      if (
        JSON.parse(localStorage.getItem('contacts')) !== null &&
        JSON.parse(localStorage.getItem('contacts')) !== []
      ) {
        getDataOfLocalStorage(JSON.parse(localStorage.getItem('contacts')));
      }
    } catch (error) {
      console.log('error JSON.parse:', error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.props;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleChange = e => {
    const throttleMessage = throttle(() => {
      PNotify.error('Input only number');
    }, 2000);

    if (e.target.name === 'number' && Number.isNaN(Number(e.target.value))) {
      throttleMessage();
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addContact = contact => {
    const {
      contacts,
      checksContact,
      addContactInStore,
      messageInputName,
    } = this.props;
    const findContact = findToMatch(contacts, contact);
    if (contact.name) {
      checksContact(findContact, contact, addContactInStore);
    } else {
      messageInputName();
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { number } = this.state;
    if (number) {
      const contact = {
        id: shortid.generate(),
        name: this.state.name,
        number: this.state.number,
      };
      this.addContact(contact);

      this.setState({
        name: '',
        number: '',
      });
    } else {
      PNotify.alert('You have not entered a number');
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <p className={styles.text_form}>Name</p>
          <input
            className={styles.input_form}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter contact"
          />
          <p className={styles.text_form}>Number</p>
          <input
            className={styles.input_form}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Enter number"
          />
          <button className={styles.btn_submit} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;

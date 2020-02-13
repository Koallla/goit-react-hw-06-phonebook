import { connect } from 'react-redux';
import * as phoneActions from '../../Redux/Phone/phoneActions';
import ContactForm from './ContactForm';

const setContactToLocalStorage = contacts =>
  localStorage.setItem('contacts', JSON.stringify(contacts));

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContactInStore: data => dispatch(phoneActions.addContact(data)),
  getDataOfLocalStorage: contacts =>
    dispatch(phoneActions.getLocalStorage(contacts)),
  setContactToLocalStorage,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

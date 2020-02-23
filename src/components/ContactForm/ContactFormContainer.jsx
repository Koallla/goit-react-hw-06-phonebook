import { connect } from 'react-redux';
import PNotify from 'pnotify/dist/es/PNotify';
import * as phoneActions from '../../Redux/Phone/phoneActions';
import ContactForm from './ContactForm';
import * as phoneSelectors from '../../Redux/Phone/phoneSelectors';
import 'pnotify/dist/PNotifyBrightTheme.css';

const checksContact = (findContact, contact, addContactInStore) => {
  if (findContact) {
    PNotify.error({
      title: 'Recording prohibited!',
      text: `${contact.name} is already in contacts`,
      modules: {
        Animate: {
          animate: true,
          inClass: 'lightSpeedIn',
          outClass: 'lightSpeedOut',
        },
      },
      addClass: 'notify',
      animateSpeed: 1000,
      delay: 5000,
    });
  } else {
    addContactInStore(contact);
  }
};

const messageInputName = () => {
  return PNotify.error({
    text: "'Input name!'",
  });
};

const setContactToLocalStorage = contacts =>
  localStorage.setItem('contacts', JSON.stringify(contacts));

const mapStateToProps = state => ({
  contacts: phoneSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContactInStore: data => dispatch(phoneActions.addContact(data)),
  getDataOfLocalStorage: contacts =>
    dispatch(phoneActions.getLocalStorage(contacts)),
  setContactToLocalStorage,
  messageInputName,
  checksContact,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

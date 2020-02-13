import { connect } from 'react-redux';
import * as phoneActions from '../../Redux/Phone/phoneActions';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContactInStore: data => dispatch(phoneActions.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

import { connect } from 'react-redux';
import * as phoneActions from '../../Redux/Phone/phoneActions';
import App from './App';

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  addContactInStore: data => dispatch(phoneActions.addContact(data)),
  deleteContactInStore: id => dispatch(phoneActions.deleteContact(id)),
  getDataOfLocalStorage: contacts =>
    dispatch(phoneActions.getLocalStorage(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

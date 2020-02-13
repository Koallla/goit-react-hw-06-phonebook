import { connect } from 'react-redux';
import * as phoneActions from '../../Redux/Phone/phoneActions';
import ContactList from './ContactList';

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filterContact: state.filter,
});

const mapDispatchToProps = dispatch => ({
  deleteContactInStore: id => dispatch(phoneActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

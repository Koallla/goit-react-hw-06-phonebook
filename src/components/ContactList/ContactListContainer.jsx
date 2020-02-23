import { connect } from 'react-redux';
import * as phoneActions from '../../Redux/Phone/phoneActions';
import ContactList from './ContactList';
import * as phoneSelectors from '../../Redux/Phone/phoneSelectors';

const mapStateToProps = state => ({
  contacts: phoneSelectors.getContacts(state),
  filterContact: phoneSelectors.filterContact(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContactInStore: id => dispatch(phoneActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

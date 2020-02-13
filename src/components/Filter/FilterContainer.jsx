import { connect } from 'react-redux';
import * as filterAction from '../../Redux/Phone/phoneActions';
import Filter from './Filter';

const mapDispatchToProps = dispatch => ({
  filterDispatch: value => dispatch(filterAction.filterContact(value)),
});

export default connect(null, mapDispatchToProps)(Filter);

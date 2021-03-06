import EventFilterBox from './event_filter_box';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventFilterBox);

import { connect } from 'react-redux';
import { editUserBusiness } from '../redux/actions';
import Edit from '../components/classes/Edit';

const mapStateToProps = state => {
  return {
    userBusinesses: state.userBusinesses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editUserBusiness: (business) => dispatch(editUserBusiness(business))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
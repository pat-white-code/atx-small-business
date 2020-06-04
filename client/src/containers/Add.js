import { connect } from 'react-redux';
import Add from '../components/classes/Add';
import { addBusiness, addUserBusiness } from '../redux/actions';

const mapStateToProps = state => {
  return {
    businesses: state.businesses,
    userId: state.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBusiness: (business)=> dispatch(addBusiness(business)),
    addUserBusiness: (business, userId) => dispatch(addUserBusiness(business, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
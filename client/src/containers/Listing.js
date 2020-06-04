import { connect } from 'react-redux';
// import Listing from '../components/Listing';
import classListing from '../components/Listing';
import { deleteBusiness, getUserBusinesses, deleteUserBusiness } from '../redux/actions';

const mapStateToProps = state => {
  return {
    userBusinesses: state.userBusinesses,
    isLoggedIn: state.isLoggedIn,
    businesses: state.businesses,
    userId: state.userId,
    dbUpdatedAt: state.dbUpdatedAt
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBusiness: (business)=> dispatch(deleteBusiness(business)),
    getUserBusinesses: (userId)=> dispatch(getUserBusinesses(userId)),
    deleteUserBusiness: (businessId) => dispatch(deleteUserBusiness(businessId))
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Listing)
export default connect(mapStateToProps, mapDispatchToProps)(classListing)
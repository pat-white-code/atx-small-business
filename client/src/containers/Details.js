import { connect } from 'react-redux';
import Details from '../components/Details';

const mapStateToProps = state => {
  return {
    // businesses: state.businesses,
    userBusinesses: state.userBusinesses
  }
}

export default connect(mapStateToProps)(Details);
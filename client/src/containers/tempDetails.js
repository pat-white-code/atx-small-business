import { connect } from 'react-redux';
import tempDetails from '../components/tempDetails';

const mapStateToProps = state => {
  return {
    businesses: state.businesses
  }
}

export default connect(mapStateToProps)(tempDetails);
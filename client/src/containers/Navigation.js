import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { logout } from '../redux/actions';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: ()=> dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
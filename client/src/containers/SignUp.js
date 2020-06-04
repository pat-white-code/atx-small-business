import { connect } from 'react-redux';
import Signup from '../components/classes/Signup';
import { initialLogin } from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    initialLogin: (id)=>dispatch(initialLogin(id))
  }
}

export default connect(null, mapDispatchToProps)(Signup)
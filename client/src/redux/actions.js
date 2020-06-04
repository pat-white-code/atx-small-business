import axios from 'axios';

// ACTION CREATORS HERE
const isLoggedIn = () => {
  return {type: 'LOGS_IN'}
}

const getsUserId = (userId) => {
  return {type: 'GETS_USER_ID', payload: userId}
}

const getsUserBusinesses = (businesses) => {
  return {type: 'GETS_USER_BUSINESSES', payload: businesses}
}

const addsUserBusiness = () => {
  return {type: 'ADDS_USER_BUSINESS'}
}

const editsUserBusiness = () => {
  return {type: 'EDITS_USER_BUSINESS'}
}

const deletesUserBusiness = () => {
  return {type: 'DELETES_USER_BUSINESS'}
}

export const logout = () => {
  return {
    type: 'LOGS_OUT'
  }
}

export const addBusiness = business => {
  return {
    type: 'ADDS_BUSINESS',
    payload: business
  }
}

export const deleteBusiness = business => {
  return {
    type: 'DELETES_BUSINESS',
    payload: business
  }
}

// THUNK FUNCTIONS HERE

export const initialLogin = userId => {
  return dispatch => {
    console.log('USER ID:', userId);
    document.cookie = "loggedIn=true;max-age=60*1000";
    dispatch(isLoggedIn());
    dispatch(getsUserId(userId));
  }
}

export const userLogin = (user) => {
  return (dispatch) => {
    console.log('USER', user);
      axios.post('/users/login', user)
          .then(json => {
            let userId = json.data.id
            console.log(json)
            document.cookie = "loggedIn=true;max-age=60*1000"
            dispatch(isLoggedIn())
            dispatch(getsUserId(userId))
            dispatch(getUserBusinesses(userId))})
  }
}

export const getUserBusinesses = userId => {
  return (dispatch) => {
    axios.get(`/businesses/${userId}`)
      .then(res => {
        console.log(res)
        let businesses = res.data
        dispatch(getsUserBusinesses(businesses))
      })
  }
}

export const addUserBusiness = (business, userId) => {
  return (dispatch) => {
    console.log(business);
    console.log(userId);
    axios.post(`/businesses/post/${userId}`, business)
      .then(res => {
        console.log(res)
        dispatch(addsUserBusiness())
      })
  }
}

export const editUserBusiness = (business) => {
  return (dispatch) => {
    console.log('BUSINESS', business);
    axios.put(`/businesses/update/${business.id}`, business)
      .then(res => {
        console.log(res)
        dispatch(editsUserBusiness())
      })
  }
}

export const deleteUserBusiness = businessId => {
  return (dispatch) => {
    axios.delete(`/businesses/delete/${businessId}`)
      .then(res => {
        console.log(res)
        dispatch(deletesUserBusiness())
      })
  }
}

// DUMMY LOGIN FROM INITIAL BENCHMARKS
// export const login = (e) => {
//   e.preventDefault()
//   document.cookie = "loggedIn=true;max-age=60*1000";
//   return {
//     type: 'LOGS_IN'
//   }
// }
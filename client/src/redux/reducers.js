import { combineReducers } from "redux";

const isLoggedIn = (state = null, action) => {
  let newState = {...state}
  switch(action.type){
    case 'LOGS_IN':
      return newState.isLoggedIn = true;
    case 'LOGS_OUT':
      return newState.isLoggedIn = false;
    default: return state;
  }
};

const userId = (state = null, action) => {
  let newState = {...state}
  switch(action.type) {
    case 'GETS_USER_ID':
      return newState.userId = action.payload;
    case 'LOGS_OUT':
      return newState.userId = null;
    default: return state
  }
}

const businesses = (state = [], action) => {
  switch(action.type) {
    case 'ADDS_BUSINESS':
      return [...state, action.payload]
    case 'DELETES_BUSINESS':
      return state.filter(business => business.id !== action.payload.id)
    default: 
      return state
  }
}

const userBusinesses = (state=[], action) => {
  switch(action.type) {
    case 'GETS_USER_BUSINESSES':
      return action.payload;
    case 'LOGS_OUT':
      return [];
    default: return state
  }
}

const dbUpdatedAt = (state=null, action) =>{
  let newState = {...state};
  let timestamp = new Date()
  switch(action.type) {
    case 'ADDS_USER_BUSINESS':
      newState.dbUpdatedAt = timestamp
      return newState;
    case 'DELETES_USER_BUSINESS':
      newState.dbUpdatedAt = timestamp
      return newState;
    case 'EDITS_USER_BUSINESS':
      newState.dbUpdatedAt = timestamp
      return newState;
    default: return state
  }
}

export default combineReducers({ 
  isLoggedIn, 
  businesses, 
  userId, 
  userBusinesses,
  dbUpdatedAt 
});
const getUserBusinesses = require('./modules/businesses/getUserBusinesses');
const createUserBusiness = require('./modules/businesses/createUserBusiness');
const deleteUserBusiness = require('./modules/businesses/deleteUserBusiness');
const editUserBusiness = require('./modules/businesses/editUserBusiness');

module.exports = {
  getUserBusinesses,
  createUserBusiness,
  deleteUserBusiness,
  editUserBusiness
}
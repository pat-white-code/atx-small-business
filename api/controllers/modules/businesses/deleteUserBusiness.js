const mysql = require('mysql');
const pool = require('../../../connection');
const { handleSQLError } = require('../../../sql/error');

const deleteUserBusiness = (req, res) => {

  // const {name, address, description, hours} = req.body

  let sql = `
    Delete from businesses
    WHERE id = ?
    `

  let replacements = [req.params.businessId];

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err)=>{
    if (err) return handleSQLError(res, err);
    return res.status(204).send('Business successfully deleted')
  })
}

module.exports = deleteUserBusiness;
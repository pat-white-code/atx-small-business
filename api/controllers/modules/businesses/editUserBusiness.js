const mysql = require('mysql');
const pool = require('../../../connection');
const { handleSQLError } = require('../../../sql/error');

const editUserBusiness = (req, res) => {
  const {name, address, description, hours} = req.body;
  let sql = `
    UPDATE businesses
    SET
      name = ?,
      address = ?,
      description = ?,
      hours = ?
    WHERE id = ?;
    `
  let replacements = [name, address, description, hours, req.params.businessId]
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows) => {
    if(err){return handleSQLError(res, err)}
    return res.status(200).send('resource updated')
  })
}

module.exports = editUserBusiness;



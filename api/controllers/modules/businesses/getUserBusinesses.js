const mysql = require('mysql');
const pool = require('../../../connection');
const { handleSQLError } = require('../../../sql/error');

const getUserBusinesses = (req, res) => {


  let sql = `SELECT * from businesses
  WHERE userId = ?`

  let replacements = [req.params.userId]

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows)=>{
    if (err) return handleSQLError(res, err);
    return res.status(200).json(rows)
  })
}

module.exports = getUserBusinesses;
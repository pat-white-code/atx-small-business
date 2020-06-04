const mysql = require('mysql');
const pool = require('../../../connection');
const { handleSQLError } = require('../../../sql/error');

const createUserBusiness = (req, res) => {

  const {name, address, description, hours} = req.body

  let sql = `
    INSERT INTO businesses 
      (name, userId, address, description, hours) 
    VALUES 
      (?, ?, ?, ?, ?);`

  let replacements = [name, req.params.userId, address, description, hours]

  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, results)=>{
    if (err) return handleSQLError(res, err);
    return res.status(201).send(`Business created: id ${results.insertId}`)
  })
}

module.exports = createUserBusiness;
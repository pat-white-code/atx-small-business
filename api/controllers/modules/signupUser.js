const mysql = require('mysql');
const pool = require('../../connection')
const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const { handleSQLError } = require('../../sql/error');

const saltRounds = 10

const signupUser = (req, res) => {
  const { username, password } = req.body
  let sql = "INSERT INTO users (username, password) VALUES (?, ?)"

  bcrypt.hash(password, saltRounds, function(err, hash) {
    sql = mysql.format(sql, [ username, hash ])
  
    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') return res.status(409).send('Username is taken')
        return handleSQLError(res, err)
      }
      return res.json({message: 'User Created.', id: result.insertId})
    })
  })
}

module.exports = signupUser;


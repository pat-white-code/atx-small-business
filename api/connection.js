const mysql = require('mysql');
require('dotenv').config();

class Connection {
  constructor(){
  if(!this.pool) {
    console.log('creating conneciton...')
    this.pool = mysql.createPool({
      connectionLimit: 100,
      host: '35.232.67.41',
      user: 'root',
      password: process.env.CONNECTION_PASSWORD,
      database: 'atx_small_business'
      })
    return this.pool;
    }
  return this.pool
  } 
}

const instance = new Connection()

module.exports = instance;
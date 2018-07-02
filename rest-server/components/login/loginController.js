const { sign, verify } = require('jsonwebtoken');
const { compare } = require('bcrypt');
const { success, error } = require('../../../lib/log/index.js');
const loginSQLHelper = require('./loginSQLHelper.js');
const db = require('../../../database/index.js');

const loginController = async(req, res) => {
  const { email, password } = req.params;
  try {
    const query = {
      text: loginSQLHelper, 
      values: [email] 
    }
    const { rows } = await db.query(query);
    let hashed = rows[0].password; 
    const {id} = rows[0]; 
    const comparePasswords = await compare(password, hashed); 
    const token = {}; 
      token.accessToken = sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        email, 
        id
      }, process.env.SECRET); 
      rows[0].token = token; 
      return res.status(200).append('authorization', JSON.stringify(token)).send(rows[0]); 
    success('Successfuly verified account'); 
  } catch (err) {
    error('Error verifying the account -', err);
  }
}

module.exports = loginController;



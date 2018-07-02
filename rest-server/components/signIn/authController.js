import { genSalt, hash} from 'bcrypt';
import { success, error } from '../../../lib/log/index.js';
import { sign } from 'jsonwebtoken'
import db from '../../../database/index.js';
import authSQLHelper from './authSQLHelpers.js';

const createAccountController = async (req, res) => {
  const { name, lastName, email, password } = req.body; 
  try {
    const salt = await genSalt(10); 
    const hashed = await hash(password, salt); 
    const query = {
      text: authSQLHelper,
      values: [name, lastName, email, hashed]
    }
    const { rows } = await db.query(query); 
    const {id} = rows[0];
    const token = {}; 
      token.accessToken = sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        email, 
        id
      }, process.env.SECRET); 
      rows[0].token = token; 
    return res.status(200).append('authorization', JSON.stringify(token)).send(rows[0]);
    success('Sucessfully created account', rows[0]); 
  } catch (err) {
    error('signUpController createAccount - error= ', err);
    throw new Error(err);
  }
};

module.exports = createAccountController;
const { success, error } = require('../../../lib/log/index.js');
const db = require('../../../database/index.js');
const homeSQLHelper = require('./homeSQLHelper.js');

const homeController = async(req, res) => {
  const { id, status } = req.body; 
  try { 
    const query = {
      text: homeSQLHelper,
      values: [status, id]
    }
    const { rows } = await db.query(query); 
    console.log('Data back ==>>', rows); 
    // res.send('Success')
    // success('Successfull route', req.body); 
  } catch (err) {
    error('Error verifying the account -', err);
  }
}

module.exports = homeController;

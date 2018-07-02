import {  
  createDatabase,
  createUsersTable,
  dropDatabase,
  dropUsersTable
} from '../lib/pg/index.js';

const setup = async () => {
  await dropDatabase();
  await dropUsersTable();
  await createDatabase();
  await createUsersTable();
  process.exit();
};

setup();
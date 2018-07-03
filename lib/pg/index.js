require('dotenv').config();

import db from '../../database/index.js';
import {
  success,
  error
} from '../log/index.js';

const database = process.env.NODE_ENV === 'production' ? process.env.AWS_DATABASE : process.env.LOCAL_DATABASE;

export const createDatabase = async () => {
  try {
    await db.query(
      `CREATE DATABASE ${database}`
    );
    success('successfully created database ', database);
  } catch (err) {
    error('error creating database ', err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.query(
      `DROP DATABASE IF EXISTS ${database}`
    );
    success('successfully dropped database ', database);
  } catch (err) {
    error('error dropping database ', err);
  }
};

export const useDatabase = async () => {
  try {
    await db.query(
      `USE IF EXISTS ${database}`
    );
    success('successfully using database ', database);
  } catch (err) {
    error('error using database ', err);
  }
};

export const createUsersTable = async() => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS users
      (
        id SERIAL,
        name varchar (50),
        lastname varchar (50),
        profilepicture varchar (255),
        email varchar (50) UNIQUE,
        password varchar (255),
        status varchar (255),
        treats varchar (255),
        CONSTRAINT users_pk
        PRIMARY KEY (id)
      )
      `
    );
    success('successfully created users table');
  } catch (err) {
    error('error creating users table ', err);
  }
}

export const dropUsersTable = async () => {
  try {
    await db.query(
      `DROP TABLE IF EXISTS users`
    );
    success('successfully dropped users table');
  } catch (err) {
    error('error dropping users table ', err);
  }
};
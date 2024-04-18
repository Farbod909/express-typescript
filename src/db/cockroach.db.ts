import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { Pool } from 'pg';

import config from '../common/config';
import User from '../models/user.model';
const connectionString = config.DATABASE_URL;

async function newUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) {
  // Generate User ID.
  const id = uuidv4();

  // Hash password.
  const saltRounds = 10;
  const hashedPassword: string = await bcrypt.hash(password, saltRounds);

  const insertStatement = `INSERT INTO users (id, email, hashed_password, first_name, last_name) VALUES ('${id}', '${email}', '${hashedPassword}', '${firstName}', '${lastName}');`;

  const pool = new Pool({
    connectionString,
    application_name: '$ movement-service',
  });

  await pool.query(insertStatement);

  await pool.end();
}

async function getUserById(id: string) {
  const selectStatement = `SELECT * FROM users WHERE id = '${id}'`;

  const pool = new Pool({
    connectionString,
    application_name: '$ movement-service',
  });

  const res = await pool.query(selectStatement);
  return res.rows[0];
}

export { newUser, getUserById };

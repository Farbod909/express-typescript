import { v4 as uuidv4, validate as validateUuid } from 'uuid';
import bcrypt from 'bcrypt';
import { Pool } from 'pg';

import config from '../common/config';
import { BadRequestError, InternalError } from '../errors/HttpErrors';

export default interface User {
  id: string;
  email: string;
  hashed_password: string;
  first_name: string;
  last_name: string;
}

export async function newUser(
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

  const connectionString = config.DATABASE_URL;
  const pool = new Pool({
    connectionString,
    application_name: '$ movement-service',
  });

  const res = await pool.query(insertStatement);
  await pool.end();

  if (res.rowCount == null || res.rowCount === 0) {
    throw new InternalError('User not created.');
  }
  const user: User = res.rows[0];
  return user;
}

export async function getUserById(id: string): Promise<User> {
  if (!id) {
    throw new BadRequestError('Id must be provided.');
  }

  if (!validateUuid(id)) {
    throw new BadRequestError('Id must be a valid UUID.');
  }

  const selectStatement = `SELECT * FROM users WHERE id = '${id}'`;

  const connectionString = config.DATABASE_URL;
  const pool = new Pool({
    connectionString,
    application_name: '$ movement-service',
  });

  const res = await pool.query<User>(selectStatement);
  await pool.end();

  if (res.rowCount == null || res.rowCount === 0) {
    throw new BadRequestError(`No user found with id ${id}.`);
  }
  const user: User = res.rows[0];
  return user;
}

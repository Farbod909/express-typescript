import sqlite3 from 'sqlite3';
import { mkdirp } from 'mkdirp';
import crypto from 'crypto';

mkdirp.sync('var/db');

var db = new sqlite3.Database('var/db/example.db');

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS users ( \
    id INTEGER PRIMARY KEY, \
    email TEXT UNIQUE, \
    hashed_password BLOB, \
    salt BLOB, \
    first_name TEXT, \
    last_name TEXT, \
  )");
    
  // create an initial user (email: alice@example.com, password: letmein)
  var salt = crypto.randomBytes(16);
  db.run('INSERT OR IGNORE INTO users (email, hashed_password, salt) VALUES (?, ?, ?)', [
    'alice@example.com',
    crypto.pbkdf2Sync('letmein', salt, 310000, 32, 'sha256'),
    salt
  ]);
});

export default db;
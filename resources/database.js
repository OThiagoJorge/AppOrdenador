import * as SQLite from 'expo-sqlite';

// Define the name of your database file
const DB_NAME = 'myApp.db';

let db = null;

// Function to get a single, persistent database connection
export async function getDB() {
  if (!db) {
    db = await SQLite.openDatabaseAsync(DB_NAME);
  }
  return db;
}

export async function initializeDatabase() {
  const db = await getDB();
  await db.execAsync(`
    PRAGMA journal_mode = 'wal';
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      amount REAL NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );
  `);
  console.log('Database initialized and tables created');
}

export async function firstRow() {
    const db = await getDB()
    const firstRow = await db.getFirstAsync('SELECT * FROM users')
    console.log(firstRow.id, firstRow.value, firstRow.intValue);
}

export async function insertUser(name, email) {
  const db = await getDB();

  const result = await db.runAsync(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email]
  );

  return result.lastInsertRowId;
}

export async function getUsers() {
  const db = await getDB();

  const users = await db.getAllAsync(
    'SELECT * FROM users ORDER BY created_at DESC'
  );

  return users;
}
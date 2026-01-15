import * as SQLite from 'expo-sqlite'

const DB_NAME = 'example.db'

let db = null

async function getDB() {
  if (!db) {
    db = await SQLite.openDatabaseAsync(DB_NAME)
  }
  return db
}

export async function createTable() {
  const db = await getDB()

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT FALSE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      everyDay BOOLEAN
    )
  `)

  console.log('Tabela criada com sucesso')
}

export async function insertTask(title, description, completed, everyDay) {
  const db = await getDB()

  const result = await db.runAsync(
    'INSERT INTO tasks (title, description, completed, everyDay) VALUES (?, ?, ?, ?)',
    [title, description, completed, everyDay]
  )

  console.log('Tarefa inserida com ID:', result.lastInsertRowId)
}

export async function listTasks() {
  const db = await getDB()

  const tasks = await db.getAllAsync(
    'SELECT * FROM tasks'
  )

  console.log('Tarefas cadastradas:')
  console.log(tasks)
  return tasks
}
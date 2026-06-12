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
      everyDay BOOLEAN,
      deleted BOOLEAN DEFAULT FALSE,
      subtasks TEXT
    )
  `)

  console.log('Tabela criada com sucesso -se já não existia')
}

export async function insertTask(title, description, completed, everyDay, deleted) {
  const db = await getDB()

  const result = await db.runAsync(
    'INSERT INTO tasks (title, description, completed, everyDay, deleted) VALUES (?, ?, ?, ?, ?)',
    [title, description, completed, everyDay, deleted]
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

export async function updateTask(id, title, description, completed, everyDay, deleted) {
  const db = await getDB()

  await db.runAsync(
    'UPDATE tasks SET title = ?, description = ?, completed = ?, everyDay = ?, deleted = ? WHERE id = ?',
    [title, description, completed, everyDay, deleted, id]
  )

  console.log('Tarefa atualizada com ID:', id)
}

export async function deleteTask(id) {
  const db = await getDB()

  await db.runAsync(
    'DELETE FROM tasks WHERE id = ?',
    [id]
  )

  console.log('Tarefa deletada com ID:', id)
}

export async function deleteAllTasks() {
  const db = await getDB()

  await db.runAsync(
    'DELETE FROM tasks'
  )

  console.log('Todas as tarefas foram deletadas')
}

export async function dropTable() {
  const db = await getDB()

  await db.execAsync('DROP TABLE IF EXISTS tasks')

  console.log('Tabela deletada com sucesso')
} 
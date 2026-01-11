import * as SQLite from 'expo-sqlite'

// Provavelmente a forma como o banco de dados está sendo criado e acessado está errada
// É necessário utilizar o SQLiteProvider para fornecer o contexto do banco de dados
// e então utilizar o hook useSQLiteContext para acessar o banco de dados dentro das funções

// const DB_NAME = 'example.db'

// const db = await SQLite.openDatabaseAsync(DB_NAME)

let db = null

export async function createTable() {
  const db = await SQLite.useSQLiteContext()

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      everyDay BOOLEAN NOT NULL,
      todaysDate DATE
    )
  `)

  console.log('Tabela criada com sucesso')
}

export async function insertTask(title, description, everyDay, todaysDate) {
  const db = await SQLite.useSQLiteContext()

  const result = await db.runAsync(
    'INSERT INTO tasks (title, description, everyDay, todaysDate) VALUES (?, ?, ?, ?)',
    [title, description, everyDay, todaysDate]
  )

  console.log('Tarefa inserida com ID:', result.lastInsertRowId)
}

export async function listTasks() {
  const db = await SQLite.useSQLiteContext()

  const tasks = await db.getAllAsync(
    'SELECT * FROM tasks'
  )

  console.log('Tarefas cadastradas:')
  console.log(tasks)
}

// onPress={() => {
//                 let id = Math.floor(Math.random() * 1000)
//                 AsyncStorage.setItem('tarefas', JSON.stringify({text: text, description: description, id: id, everyDay: true, todaysDate: new Date()}))
//                 setAddedTask(!AddedTask)
//             }} 
// id title description everyDay todaysDate
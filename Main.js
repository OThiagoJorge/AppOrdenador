import React, { useContext, useEffect, useState } from 'react'
import { Text, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as Progress from 'react-native-progress'

import { styles } from './Styles'
import { AddTasks } from './utils/TaskUtils/AddTasks'
import { Tasks } from './utils/TaskUtils/Tasks'
import { GlobalContext } from './resources/Context'

import { listTasks } from '@/resources/database'

export const Main = () => {
  const [tasks, setTasks] = useState([])
  const { modalVisible, setModalVisible } = useContext(GlobalContext)

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    try {
      const data = await listTasks()
      if (Array.isArray(data)) {
        setTasks(data)
      }
    } catch (error) {
      console.error('Erro ao listar tarefas:', error)
    }
  }

  return (
    <>
      <StatusBar style="auto" />

      <Progress.Bar
        progress={0.3}
        width={null}
        height={30}
        color="#0a7e8c"
        borderWidth={0}
        borderRadius={0}
        useNativeDriver={false}
      />

      <Tasks />
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.button}
      >
        <Text style={styles.text}>+ Nova tarefa</Text>
      </Pressable>
      <AddTasks />
    </>
  )
}
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View, Modal, Pressable } from 'react-native'
import React, {useState, useEffect, createContext} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { styles } from './Styles'
import { AddTasks } from './AddTasks'
import { MyPushNotifications } from './Notifications'

export const TaskContext = createContext(null)

export const App = () => {

  const [AddedTask, setAddedTask] = useState(false)
  const [Description, setDescription] = useState('')
  const [Tasks, setTasks] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [DescriptionVisibility, setDescriptionVisibility] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      const saved = await AsyncStorage.getItem("tarefas")
      const value = JSON.parse(saved)
      if (value) setTasks(task => [...task, value])
    }
    loadData()
  }, [AddedTask])

  return (
    <TaskContext value={{AddedTask, setAddedTask, modalVisible, setModalVisible, Description, setDescription}}>
        <View style={styles.container}>
          <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
            {Tasks.map((task, i) => (
              <Pressable 
                key={i} 
                style={styles.task}
                onPress={() => {
                  setDescriptionVisibility(!DescriptionVisibility)
                  setDescription(task.Description)
                }}
              >
                <Text>- {task.text}</Text>
              </Pressable>
            ))}
            {DescriptionVisibility ? 
              <Modal
                style={styles.description}
              >
                <Text style={styles.description}>{Description}</Text>
                <Pressable
                  onPress={() => setDescriptionVisibility(!DescriptionVisibility)}
                >
                  <Text>fechar</Text>
                </Pressable> 
              </Modal>
            : 
            null}
            <StatusBar style="auto" />
          </ScrollView>
          <Pressable
            title="+"
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
            style={styles.button}
          >
            <Text style={styles.text}>+ Nova tarefa</Text>  
          </Pressable>
          <MyPushNotifications />
          <AddTasks />
        </View>
    </TaskContext>
  )
}

import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View, Button, Alert, TextInput, Modal, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { styles } from './Styles'

export default function App() {

  const [text, setText] = useState('')
  const [Description, setDescription] = useState('')
  const [Tasks, setTasks] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [AddedTask, setAddedTask] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      const saved = await AsyncStorage.getItem("tarefas")
      const value = JSON.parse(saved)
      if (value) setTasks(task => [...task, value])
    }
    loadData()
  }, [AddedTask])

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        {Tasks.map((task, i) => (
          <Text 
            key={i} 
            style={styles.task}
          >
            - {task.text}
            {'\n'}
            {task.Description}
          </Text>
        ))}
        <Pressable
            title="+"
            onPress={() => {
              setModalVisible(!modalVisible)
            }
            }
            style={styles.button}
        >
          <Text style={styles.text}>Nova tarefa</Text>  
        </Pressable>
        <Modal
            style={styles.modal}
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
              setModalVisible(!modalVisible)
        }}>
            <TextInput
              style={{height: 40, padding: 5}}
              placeholder="Título"
              onChangeText={newText => {
                setText(newText)
              }}            
            />
            <TextInput
              style={{height: 40, padding: 5}}
              placeholder="Descrição"
              onChangeText={newText => {
                setDescription(newText)
              }}            
            />
            <Button
              title="Adicionar tarefa"
              onPress={() => {
                AsyncStorage.setItem('tarefas', JSON.stringify({text: text, Description: Description}))
                setAddedTask(!AddedTask)
              }}       
            />
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>fechar</Text>
            </Pressable>
        </Modal>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  )
}

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button, Alert, TextInput, Modal, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function App() {

  const [text, setText] = useState('')
  const [oficialText, setOficialText] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [AddedTask, setAddedTask] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      const saved = await AsyncStorage.getItem("tarefa")
      if (saved) setOficialText(saved)
    }
    loadData()
  }, [AddedTask])

  return (
    <View style={styles.container}>
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
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
      }}>
          <TextInput
            style={{height: 40, padding: 5}}
            placeholder="Minha nova tarefa"
            onChangeText={newText => setText(newText)}            
          />
          <Button
            title="Adicionar tarefa"
            onPress={() => {
              AsyncStorage.setItem('tarefa', text)
              setAddedTask(!AddedTask)
            }}       
          />
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text>fechar</Text>
          </Pressable>
      </Modal>
      <Text style={styles.task}>{oficialText}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: 'blue',
    borderRadius: 50
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 150
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    height: 300
  },
  task: {
    fontSize: 30,
    marginTop: 20
  }
})

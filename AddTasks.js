import { Text, Button, Alert, TextInput, Modal, Pressable } from 'react-native'
import React, {useState, useContext} from 'react'
import { TaskContext } from './App'
import { styles } from './Styles'
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AddTasks = () => {

    const {AddedTask, setAddedTask, modalVisible, setModalVisible, Description, setDescription} = useContext(TaskContext)

    const [text, setText] = useState('')

  return (
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
)}
import { Text, Button, TextInput, Modal, Pressable } from 'react-native'
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context'
import { styles } from '../Styles'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from '@react-navigation/native'

export const AddTasks = () => {
     const navigation = useNavigation()

    const {AddedTask, setAddedTask, modalVisible, setModalVisible, Description, setDescription} = useContext(GlobalContext)

    const [text, setText] = useState('')

  return (
    <Modal
        style={styles.modal}
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
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
            title="Ir para o calendário"
            onPress={() => navigation.navigate('Calendar')} 
        />
        <Button
            title="Adicionar tarefa"
            onPress={() => {
                let id = Math.floor(Math.random() * 1000)
                AsyncStorage.setItem('tarefas', JSON.stringify({text: text, Description: Description, id: id}))
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
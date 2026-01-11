import { Text, Button, TextInput, Modal, Pressable } from 'react-native'
import React, {useState, useContext} from 'react'
// Pra concertar essas importações cheias de pontos, termine o tutorial. https://dev.to/cathylai/how-to-use-path-aliases-in-react-native-with-expo-1fl2
// Mas cuidado porque ocorre algum erro ao instalar o babel relacionado ao expo
import { GlobalContext } from '../../resources/Context'
import { styles } from '../../Styles'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from '@react-navigation/native'
import { insertTask, createTable, listTasks } from '@/resources/database'

export const AddTasks = () => {
     const navigation = useNavigation()

    const {AddedTask, setAddedTask, modalVisible, setModalVisible, description, setDescription} = useContext(GlobalContext)

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
        <Text>Exibir todos os dias</Text>
        <Button
            title="Selecionar datas"
            onPress={() => navigation.navigate('Calendar')} 
        />
        {/* No caso do botão abaixo, foi adicionado o campo "EveryDay", por padrão como "true", o que significa
        que qualquer que seja a data selecionada posterior ao dia em que a tarefa foi criada, ela será exibida */}
        {/* Modificar ese "description para ser minúsculo, porque eu tenho TOC" */}
        <Button
            title="Adicionar tarefa"
            onPress={() => {
                let id = Math.floor(Math.random() * 1000)
                AsyncStorage.setItem('tarefas', JSON.stringify({text: text, description: description, id: id, everyDay: true, todaysDate: new Date()}))
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
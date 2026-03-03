import { Text, Pressable, View, Modal } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import React, { useState, useContext } from 'react'
import { TaskTitle } from './TaskTitle'
import { TaskDescription } from '../TaskDescription'
import { styles } from '@/Styles'
import { deleteTask } from '@/resources/database'
import { GlobalContext } from '@/resources/Context'

export const TaskInListMode = ({task, i}) => {

    const [text, onChangeText] = useState('Useless Text')
    const [taskTitleInputIsVisible, setTaskTitleInputIsVisible] = useState(false)
    const [descriptionInputIsVisible, setDescriptionInputIsVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)

    return (
        <View 
            style={{
                backgroundColor: task.completed ? '#d1fae5' : 'white',
                transition: '7s', 
                flexDirection: 'row', 
                alignItems: 'center', 
                borderRadius: 10, 
                display: 'grid'
            }}
            key={i}
        >
            <View
                style={{flexDirection: 'column', width: '80%', paddingVertical: 10}}
            >
                <Pressable
                    onPress={() => setModalVisible(true)}
                    style={[{
                    backgroundColor: task.completed ? '#d1fae5' : 'white',
                    transition: '7s', 
                    width: '85%', 
                    padding: 10, 
                    marginBottom: 10, 
                    marginTop: 10, 
                    marginLeft: 10, 
                    borderRadius: 10, 
                    backgroundColor: '#f0f0f0'
                }]}
                >
                    <TaskTitle 
                        task={task} 
                        taskTitleInputIsVisible={taskTitleInputIsVisible} 
                        setTaskTitleInputIsVisible={setTaskTitleInputIsVisible} 
                        onChangeText={onChangeText} 
                        inListMode={true} 
                    />
                </Pressable>
                <Modal
                    style={{marginTop: 100}}
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible)
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <TaskDescription 
                                task={task} 
                                descriptionInputIsVisible={descriptionInputIsVisible} 
                                setDescriptionInputIsVisible={setDescriptionInputIsVisible} 
                                onChangeText={onChangeText}
                            />
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>fechar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
            <Menu>
                <MenuTrigger>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </MenuTrigger>
                <MenuOptions style={{padding: 15}}>
                    <MenuOption 
                        onSelect={
                            () => deleteTask(task.id)
                            .then(() => setTaskDidUpdate(!taskDidUpdate))
                        } 
                        text='Excluir' 
                    />
                </MenuOptions>
            </Menu>
        </View>
    )
}
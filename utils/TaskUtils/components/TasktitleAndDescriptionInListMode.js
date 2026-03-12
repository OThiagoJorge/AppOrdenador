import { Text, Pressable, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { TaskTitle } from './TaskTitle'
import { TaskDescription } from '../TaskDescription'
import { styles } from '@/Styles'

export const TaskTitleAndDescriptionInListMode = ({task}) => {

    const [modalVisible, setModalVisible] = useState(false)    
    const [descriptionInputIsVisible, setDescriptionInputIsVisible] = useState(false)
    const [text, onChangeText] = useState('Useless Text')
    const [taskTitleInputIsVisible, setTaskTitleInputIsVisible] = useState(false)

    return (
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
    )
}
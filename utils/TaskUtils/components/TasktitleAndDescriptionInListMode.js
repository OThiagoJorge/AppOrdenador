import { Text, Pressable, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { TaskTitle } from './TaskTitle'
import { TaskDescription } from '../TaskProperties/TaskDescription'
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
            </View>
    )
}
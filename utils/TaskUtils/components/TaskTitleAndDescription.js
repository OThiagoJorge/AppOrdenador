import { View } from 'react-native'
import { TaskTitle } from './TaskTitle'
import { TaskDescription } from '../TaskDescription'
import React, { useState, useContext } from 'react'
import { GlobalContext } from '@/resources/Context'

export const TaskTitleAndDescription = ({task, isChecked}) => {
    
    const [text, onChangeText] = useState('Useless Text')
    const {taskTitleInputIsVisible, setTaskTitleInputIsVisible, descriptionInputIsVisible, setDescriptionInputIsVisible} = useContext(GlobalContext)

    return (
        <View
            style={{flexDirection: 'column', width: '80%', paddingVertical: 10}}
        >
            <TaskTitle 
                task={task} 
                taskTitleInputIsVisible={taskTitleInputIsVisible} 
                setTaskTitleInputIsVisible={setTaskTitleInputIsVisible} 
                onChangeText={onChangeText} 
                isChecked={isChecked} 
            />
            <TaskDescription 
                task={task} 
                descriptionInputIsVisible={descriptionInputIsVisible} 
                setDescriptionInputIsVisible={setDescriptionInputIsVisible} 
                onChangeText={onChangeText}
                isChecked={isChecked}
            />
        </View>
    )
}
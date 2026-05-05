import { View } from 'react-native'
import { TaskTitle } from './TaskTitle'

import React, { useState, useContext } from 'react'
import { GlobalContext } from '@/resources/Context'

export const TaskTitleAndDescription = ( {task} ) => {
    
    const [text, onChangeText] = useState('Useless Text')
    const {taskTitleInputIsVisible, setTaskTitleInputIsVisible, descriptionInputIsVisible, setDescriptionInputIsVisible} = useContext(GlobalContext)

    return (
        <View
            style={{width: '100%', position: 'absolute', top: 0, left: 0}}
        >
            <TaskTitle 
                task={task} 
                taskTitleInputIsVisible={taskTitleInputIsVisible} 
                setTaskTitleInputIsVisible={setTaskTitleInputIsVisible} 
                onChangeText={onChangeText} 
            />            
        </View>
    )
}
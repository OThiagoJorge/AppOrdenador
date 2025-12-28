import { Text, Pressable, View, Alert, TextInput } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import React, { useState } from 'react'
import { TaskTitle } from './TaskTitle'
import { TaskDescription } from './TaskDescription'

export const TaskInListMode = ({task, isChecked, i}) => {

    const [text, onChangeText] = useState('Useless Text')
    const [taskTitleInputIsVisible, setTaskTitleInputIsVisible] = useState(false)
    const [descriptionInputIsVisible, setDescriptionInputIsVisible] = useState(false)

    return (
        <View 
            style={{
                backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white',
                transition: '7s', 
                flexDirection: 'row', 
                alignItems: 'center', 
                borderRadius: 10, 
                display: 'grid'
            }}
            key={i}
        >
            {/* <Pressable
                onPress={() =>Alert.alert('clicado')}
                style={[{
                    backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white',
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
                    <Text style={{
                        textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', 
                        fontSize: 20
                    }}>
                        - {task.text}{'\n'}{task.description}
                    </Text>
            </Pressable> */}
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
            <Menu>
                <MenuTrigger>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </MenuTrigger>
                <MenuOptions style={{padding: 15}}>
                    <MenuOption onSelect={() => alert(`example`)} text='Excluir' />
                </MenuOptions>
            </Menu>
        </View>
    )
}
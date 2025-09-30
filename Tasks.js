import { Text, Pressable } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { styles } from './Styles'
import { Checkbox } from 'expo-checkbox'
import { GlobalContext } from './Context'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Tasks = () => {
    const {DescriptionVisibility, setDescriptionVisibility, setDescription, isPressed, setPressed, AddedTask} = useContext(GlobalContext)

    const [isChecked, setChecked] = useState([])
    const [Tasks, setTasks] = useState([])

    useEffect(() => {
        const loadData = async () => {
          const saved = await AsyncStorage.getItem("tarefas")
          const value = JSON.parse(saved)
          if (value) setTasks(task => [...task, value])
        }
        loadData()
    }, [AddedTask])

    return (
        <>
            {Tasks.map((task, i) => (
                <Pressable
                onLongPress={() => {
                    let newPressed = [...isPressed]
                    newPressed[task.id] = !newPressed[task.id]
                    setPressed(newPressed)
                    return newPressed
                }} 
                style={({ pressed }) => [
                    styles.task,
                    {
                    backgroundColor: pressed ? '#ddd' : '#fff',
                    backgroundColor: isPressed[task.id] ? '#46eb34' : '#fff'
                    },
                ]}
                key={i}
                >
                <Pressable  
                    onPress={() => {
                    setDescriptionVisibility(!DescriptionVisibility)
                    setDescription(task.Description)
                    }}
                >
                    <Text style={{textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', fontSize: 20}}>- {task.text}</Text>
                </Pressable>
                <Checkbox
                    style={styles.checkbox}
                    value={isChecked[task.id]}
                    onValueChange={() => {
                    let newChecked = [...isChecked]
                    newChecked[task.id] = !newChecked[task.id]
                    setChecked(newChecked)
                    return newChecked
                    }}
                    color={isChecked ? '#4630EB' : undefined}
                />
                </Pressable>
            ))}
        </>
    )
}
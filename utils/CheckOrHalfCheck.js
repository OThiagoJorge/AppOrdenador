import {  Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../Styles'
import { Checkbox } from 'expo-checkbox'
import { GlobalContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export const CheckOrHalfCheck = ({isChecked, setChecked, task, goToAnotherPage, i}) => {
    const {AddedTask, setAddedTask} = useContext(GlobalContext)
    return (
        <View style={{
            position: 'absolute',
            right: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: '17%',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 30,
            padding: 2
        }}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked[task.id]}
                onValueChange={() => {
                    let newChecked = [...isChecked]
                    newChecked[task.id] = !newChecked[task.id]
                    setChecked(newChecked)
                    setTimeout(() => {
                        goToAnotherPage(i + 1)
                    }, 7000)
                }}
                color={isChecked ? '#4630EB' : '#fff'}
            />
            <Pressable 
                style={{
                    width: '100%', 
                    borderWidth: 2, 
                    borderRadius: 25, 
                    padding: 5, 
                    marginTop: 10, 
                    alignContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: 'white'
                }}
                onPress={() => {
                    let id = Math.floor(Math.random() * 1000)
                    AsyncStorage.setItem('tarefas', JSON.stringify({text: task.text + ' parte 2', description: task.description, id: id}))
                    setAddedTask(!AddedTask)
            }} 
            >
                <MaterialCommunityIcons 
                    name="plus-minus-variant" 
                    size={24} 
                    color="black" 
                />
            </Pressable>
        </View>
    )
}
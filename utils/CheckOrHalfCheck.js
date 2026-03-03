import { Pressable, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '@/Styles'
import { GlobalContext } from '../resources/Context'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { insertTask } from '@/resources/database'
import { updateTask } from '@/resources/database'

export const CheckOrHalfCheck = ({task, goToAnotherPage, i}) => {

    const {AddedTask, setAddedTask} = useContext(GlobalContext)
    const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)

    return (
        <View style={{
            position: 'absolute',
            right: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 43,
            borderColor: 'black',
            borderWidth: 3,
            borderRadius: 30,
            padding: 0,
            backgroundColor: '#0a7e8c',
            borderColor: '#0a7e8c'
        }}>
            <BouncyCheckbox 
                style={styles.checkbox}
                isChecked={task.completed}
                onPress={() => {
                    let completed = !task.completed
                    updateTask(task.id, task.title, task.description, completed, task.everyDay)
                    setTimeout(() => {
                        goToAnotherPage(i + 1)
                    }, 7000)
                    setTaskDidUpdate(!taskDidUpdate)
                }}
                fillColor='#0a7e8c'
                size={40}
            />
            <Pressable 
                style={{
                    width: 40, 
                    borderWidth: 0, 
                    borderRadius: 25, 
                    padding: 0, 
                    marginTop: 10, 
                    alignContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: 'white'
                }}
                onPress={() => {
                    let title = task.text + ' parte 2'
                    insertTask(title, task.description, false, true)
                    setAddedTask(!AddedTask)
                    setTimeout(() => {
                        goToAnotherPage(i + 1)
                    }, 7000)
                }} 
            >
                <Image 
                    source={require('../assets/plus-minus-sign(1).png')} 
                    style={{width: 40, height: 40}} 
                />
            </Pressable>
        </View>
    )
}
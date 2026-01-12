import { Pressable, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../Styles'
import { GlobalContext } from '../resources/Context'
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { insertTask } from '@/resources/database'

export const CheckOrHalfCheck = ({isChecked, setChecked, task, goToAnotherPage, i}) => {
    const {AddedTask, setAddedTask} = useContext(GlobalContext)
    return (
        <View style={{
            position: 'absolute',
            right: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 30,
            padding: 0
        }}>
            <BouncyCheckbox 
                style={styles.checkbox}
                isChecked={isChecked[task.id]}
                onPress={() => {
                    let newChecked = [...isChecked]
                    newChecked[task.id] = !newChecked[task.id]
                    setChecked(newChecked)
                    setTimeout(() => {
                        goToAnotherPage(i + 1)
                    }, 7000)
                }}
                fillColor='#0a7e8c'
                size={40}
            />
            <Pressable 
                style={{
                    width: '100%', 
                    borderWidth: 0, 
                    borderRadius: 25, 
                    padding: 0, 
                    marginTop: 10, 
                    alignContent: 'center', 
                    alignItems: 'center', 
                    backgroundColor: 'white'
                }}
                onPress={() => {
                    let id = Math.floor(Math.random() * 1000)
                    insertTask(task.text + ' parte 2', task.description, false, true)
                    setAddedTask(!AddedTask)
                    let newChecked = [...isChecked]
                    newChecked[task.id] = !newChecked[task.id]
                    setChecked(newChecked)
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
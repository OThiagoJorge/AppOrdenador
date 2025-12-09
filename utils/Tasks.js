import { Text, Pressable, View } from 'react-native'
import React, {useState, useEffect, useContext, useRef} from 'react'
import { styles } from '../Styles'
import { Checkbox } from 'expo-checkbox'
import { GlobalContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  PagerView  from 'react-native-pager-view'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { ProgressRotation } from './ProgressRotation'

export const Tasks = () => {
    const refPagerView = useRef(null)

    const goToAnotherPage = (pageNumber) => {
        refPagerView.current.setPage(pageNumber)
    }

    const {AddedTask, setAddedTask} = useContext(GlobalContext)
    const {isChecked, setChecked} = useContext(GlobalContext)

    const [Tasks, setTasks] = useState([])

    useEffect(() => {
        const loadData = async () => {
          const saved = await AsyncStorage.getItem("tarefas")
          const value = JSON.parse(saved)
          if (value) {setTasks(task => [...task, value])}
        }
        loadData()
        console.log(Tasks)
    }, [AddedTask])

    return (
        <PagerView 
            style={styles.pagerView} 
            initialPage={0}
            orientation='vertical'
            ref={refPagerView}
        >
            {Tasks.map((task, i) => (
                <View 
                    style={{backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}}
                    key={i}
                >
                    <ProgressRotation task={task} />
                    <Pressable
                        style={[
                            styles.task,
                            {backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}
                        ]}
                    >
                        <Text style={{
                            textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', 
                            fontSize: 20
                        }}>
                            - {task.text}{'\n'}{task.Description}
                        </Text>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '15%'}}>
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
                                color={isChecked ? '#4630EB' : undefined}
                            />
                            <Pressable 
                                style={{
                                    width: '100%', 
                                    borderWidth: 2, 
                                    borderRadius: 0, 
                                    padding: 5, 
                                    marginTop: 10, 
                                    alignContent: 'center', 
                                    alignItems: 'center', 
                                    backgroundColor: 'white'
                                }}
                                onPress={() => {
                                    let id = Math.floor(Math.random() * 1000)
                                    AsyncStorage.setItem('tarefas', JSON.stringify({text: 'Tarefa', Description: 'Description', id: id}))
                                    setAddedTask(!AddedTask)
                            }} 
                            >
                                <MaterialCommunityIcons name="plus-minus-variant" size={24} color="black" />
                            </Pressable>
                        </View>
                    </Pressable>
                </View>
            ))}
        </PagerView>
    )
}
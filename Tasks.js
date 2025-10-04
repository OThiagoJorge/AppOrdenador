import { Text, Pressable, View } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { styles } from './Styles'
import { Checkbox } from 'expo-checkbox'
import { GlobalContext } from './Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  PagerView  from 'react-native-pager-view'

export const Tasks = () => {
    const {AddedTask} = useContext(GlobalContext)

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
        <PagerView 
            style={styles.pagerView} initialPage={0}
            orientation='vertical'
        >
            {Tasks.map((task, i) => (
                <View key={i}>
                    <Pressable
                        style={styles.task}
                        key={i}
                    >
                        <Text style={{textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', fontSize: 20}}>- {task.text}{'\n'}{task.Description}</Text>
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
                </View>
            ))}
    </PagerView>
    )
}
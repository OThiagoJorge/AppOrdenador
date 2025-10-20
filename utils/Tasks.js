import { Text, Pressable, View } from 'react-native'
import React, {useState, useEffect, useContext, useRef} from 'react'
import { styles } from '../Styles'
import { Checkbox } from 'expo-checkbox'
import { GlobalContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  PagerView  from 'react-native-pager-view'
import { AnimatedCircularProgress } from 'react-native-circular-progress'

export const Tasks = () => {
    const refPagerView = useRef(null)

    const goToAnotherPage = (pageNumber) => {
        refPagerView.current.setPage(pageNumber)
    }

    const {AddedTask, setAddedTask} = useContext(GlobalContext)

    const [isChecked, setChecked] = useState([])
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
                <View key={i}>
                    <Pressable
                        style={[
                            styles.task,
                            {backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}
                        ]}
                    >
                        <Pressable
                            style={{
                                borderRadius: 25,
                                borderWidth: 0,
                                padding: 10,
                                color: 'white',
                                opacity: isChecked[task.id] ? 1 : 0
                            }} 
                            onPress={() => {
                                const id = task.id
                                Tasks.map((task) => {
                                    if (task.id === id) {
                                        Tasks.splice(Tasks.indexOf(task), 1)
                                    }
                                })
                                AsyncStorage.setItem('tarefas', JSON.stringify(Tasks))
                                setAddedTask(!AddedTask)

                            }}
                        >
                            <AnimatedCircularProgress
                                duration={7000}
                                size={60}
                                width={5}
                                fill={isChecked[task.id] ? 100 : 0}
                                tintColor="#00e0ff"
                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                backgroundColor="transparent"
                            >
                            </AnimatedCircularProgress>
                        </Pressable>
                        <Text style={{
                            textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', 
                            fontSize: 20
                        }}>
                            - {task.text}{'\n'}{task.Description}
                        </Text>
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
                    </Pressable>
                </View>
            ))}
        </PagerView>
    )
}
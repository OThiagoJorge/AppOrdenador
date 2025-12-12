import { Text, Pressable, View, ScrollView } from 'react-native'
import React, {useState, useEffect, useContext, useRef} from 'react'
import { styles } from '../Styles'
import { GlobalContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  PagerView  from 'react-native-pager-view'
import { TaskCard } from './TaskCard'

export const Tasks = () => {
    const refPagerView = useRef(null)

    const goToAnotherPage = (pageNumber) => {
        refPagerView.current.setPage(pageNumber)
    }

    const {AddedTask, setAddedTask} = useContext(GlobalContext)
    const {isChecked, setChecked} = useContext(GlobalContext)
    const {isListOrPage, setIsListOrPage} = useContext(GlobalContext)

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

    if(isListOrPage){
    return (
        <PagerView 
            style={styles.pagerView} 
            initialPage={0}
            orientation='vertical'
            ref={refPagerView}
        >
            {Tasks.map((task, i) => (
                <TaskCard 
                    key={i}
                    task={task}
                    isChecked={isChecked}
                    setChecked={setChecked}
                    goToAnotherPage={goToAnotherPage}
                    i={i}
                />
            ))}
        </PagerView>
    )} else {
        return (
            <ScrollView style={styles.scrollView}>
                {Tasks.map((task, i) => (
                    <View 
                        style={{backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}}
                        key={i}
                    >
                        <Pressable
                            style={[
                                {backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}
                            ]}
                        >
                            <Text style={{
                                textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', 
                                fontSize: 20
                            }}>
                                - {task.text}{'\n'}{task.Description}
                            </Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        )
    }
}
import { Text, Pressable, View, ScrollView } from 'react-native'
import React, {useState, useEffect, useContext, useRef} from 'react'
import { styles } from '../Styles'
import { GlobalContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  PagerView  from 'react-native-pager-view'
import { TaskCard } from './TaskCard'
import Entypo from '@expo/vector-icons/Entypo'

const TaskListMode = ({task, isChecked, i}) => {
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
            <Pressable
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
            </Pressable>
            <Pressable style={{position: 'absolute', right: 10, top: 10}}>
                <Entypo name="dots-three-vertical" size={24} color="black" />
            </Pressable>
        </View>
    )
}

export const Tasks = () => {
    const refPagerView = useRef(null)

    const goToAnotherPage = (pageNumber) => {
        refPagerView.current.setPage(pageNumber)
    }

    const {AddedTask, setAddedTask} = useContext(GlobalContext)
    const {isChecked, setChecked} = useContext(GlobalContext)
    const {isCard, setIsCard} = useContext(GlobalContext)
    const {arrowIsClicked, setArrowIsClicked} = useContext(GlobalContext)

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

    if(isCard && !arrowIsClicked) {
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
                    <TaskListMode 
                        key={i}
                        task={task}
                        isChecked={isChecked}
                        i={i}
                    />
                ))}
            </ScrollView>
        )
    }
}
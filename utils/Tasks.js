import { Text, Pressable, View } from 'react-native'
import React, {useState, useEffect, useContext, useRef} from 'react'
import { styles } from '../Styles'
import { GlobalContext } from '../Context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import  PagerView  from 'react-native-pager-view'
import { ProgressRotation } from './ProgressRotation'
import { CheckOrHalfCheck } from './CheckOrHalfCheck'

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
                        <CheckOrHalfCheck 
                            isChecked={isChecked} 
                            setChecked={setChecked} 
                            task={task} 
                            goToAnotherPage={goToAnotherPage}
                            i={i}
                        />
                    </Pressable>
                </View>
            ))}
        </PagerView>
    )} else {
        return (
            // Verificar por que o estilo buga ao tentar abstrair esse trecho repetitivo do código
            <View>
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
                            <CheckOrHalfCheck 
                                isChecked={isChecked} 
                                setChecked={setChecked} 
                                task={task} 
                                goToAnotherPage={goToAnotherPage}
                                i={i}
                            />
                        </Pressable>
                    </View>
                ))}
            </View>
        )
    }
}
import { ScrollView } from 'react-native'
import React, {useState, useEffect, useContext, useRef, use} from 'react'
import { styles } from '@/Styles'
import { GlobalContext } from '@/resources/Context'
import  PagerView  from 'react-native-pager-view'
import { TaskCard } from './TaskCard'
import { TaskInListMode } from './components/TaskInListMode'
import { listTasks } from '@/resources/database'

export const Tasks = () => {
    const refPagerView = useRef(null)

    const goToAnotherPage = (pageNumber) => {
        refPagerView.current.setPage(pageNumber)
    }

    const {isCard, setIsCard} = useContext(GlobalContext)
    const {arrowIsClicked, setArrowIsClicked} = useContext(GlobalContext)
    const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)
    const {Tasks, setTasks} = useContext(GlobalContext)
    const {completedPercentage, setCompletedPercentage} = useContext(GlobalContext)

    useEffect(() => {
        loadTasks()
    }, [taskDidUpdate])

    useEffect(() => {
        calculusCompletedPercentage()
    }, [Tasks])
    
    const loadTasks = async () => {
        try{
            const data = await listTasks()
            if (Array.isArray(data)) {
                setTasks(data)
            }
        }catch(error){
            console.error('Erro ao listar tarefas:', error)
        }
    }

    const calculusCompletedPercentage = async () => {
        if (Tasks.length > 0) {
            const percentage = (Tasks.filter(task => task.completed).length / Tasks.length) * 100
            setCompletedPercentage(percentage)
            console.log('Completed Percentage:', percentage)
        }
    }

    if(isCard && !arrowIsClicked) {
        return (
            <PagerView 
                style={styles.pagerView} 
                initialPage={0}
                orientation='vertical'
                ref={refPagerView}
            >
                 {Tasks.filter(task => task.deleted === false || task.deleted === 0).map((task, i) => (
                    <TaskCard 
                        key={i}
                        task={task}
                        goToAnotherPage={goToAnotherPage}
                        i={i}
                    />
                ))}
            </PagerView>
    )} else {
        return (
            <ScrollView style={styles.scrollView}>
                {Tasks.filter(task => task.deleted === false || task.deleted === 0).map((task, i) => (
                    <TaskInListMode 
                        key={i}
                        task={task}                                
                        i={i}
                    />
                ))}
            </ScrollView>
        )
    }
}
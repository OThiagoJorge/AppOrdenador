import { TaskInListMode } from './TaskUtils/components/TaskInListMode'
import { ScrollView } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { styles } from '../Styles'
import { GlobalContext } from '../resources/Context'
import { listTasks } from '@/resources/database'

export const TrashScreen = () => {

    const {isChecked, setChecked} = useContext(GlobalContext)
        const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)
        const {Tasks, setTasks} = useContext(GlobalContext)

    useEffect(() => {
            loadTasks()
        }, [taskDidUpdate])      
        
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

        return (
            <ScrollView style={styles.scrollView}>
            {Tasks.filter(task => task.deleted === true || task.deleted === 1).map((task, i) => (
                <TaskInListMode 
                key={i}
                task={task}
                isChecked={isChecked}
                i={i}
                />
            ))}
            </ScrollView>
        )
}
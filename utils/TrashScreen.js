import { TaskInListMode } from './TaskUtils/components/TaskInListMode'
import { ScrollView } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { styles } from '../Styles'
import { GlobalContext } from '../resources/Context'
import { listTasks } from '@/resources/database'

export const TrashScreen = () => {

    const {AddedTask, setAddedTask} = useContext(GlobalContext)
    const {isChecked, setChecked} = useContext(GlobalContext)

    const [Tasks, setTasks] = useState([])

    useEffect(() => {
        const loadData = async () => {
          const value = listTasks()
          if (value) {setTasks(task => [...task, value])}
        }
        loadData()
        console.log(Tasks)
    }, [AddedTask])

        return (
            <ScrollView style={styles.scrollView}>
                {Tasks.map((task, i) => (
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
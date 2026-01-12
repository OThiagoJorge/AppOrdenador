import { ScrollView } from 'react-native'
import React, {useState, useEffect, useContext, useRef} from 'react'
import { styles } from '../../Styles'
import { GlobalContext } from '../../resources/Context'
import  PagerView  from 'react-native-pager-view'
import { TaskCard } from './TaskCard'
import { TaskInListMode } from './components/TaskInListMode'
import { listTasks } from '@/resources/database'

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
          value = listTasks()
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
}
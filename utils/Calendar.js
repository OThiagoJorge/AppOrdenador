import { Calendar } from 'react-native-calendars'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../resources/Context'
import { listTasks } from '@/resources/database'

export const CalendarScreen = () => {
    // Futuramente permitir que seja escolhido um dia de 'folga', adiando automaticamente as tarefas que não necessitam ser feitas naquele dia, para o próximo dia útil. Talvez seja necessário criar um campo 'isHoliday' ou algo do tipo para cada tarefa, para que o sistema saiba quais tarefas podem ser adiadas e quais não podem. Talvez seja necessário também criar um campo 'isPostponed' para cada tarefa, para que o sistema saiba quais tarefas já foram adiadas e não as adie novamente. Talvez seja necessário também criar um campo 'postponedDate' para cada tarefa, para que o sistema saiba para qual data a tarefa foi adiada. 
    const navigation = useNavigation()

    const {AddedTask, setAddedTask, todayDate, setTodayDate} = useContext(GlobalContext)

    const [Tasks, setTasks] = useState([])

    useEffect(() => {
        const loadData = async () => {
            value = listTasks()
            if (value) {setTasks(task => [...task, value])}
        }
        loadData()
        console.log(Tasks)
    }, [AddedTask])

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

    return (
        <>
            <Calendar
                onDayPress={day => {
                    console.log('selected day', day)
                    setSelectedDate(day.dateString)
                    const todayTasks = Tasks.filter(task => {
                        return task.everyDay === true
                    })
                    console.log('Tasks for selected day:', todayTasks)
                    navigation.navigate('Home')
                    const formattedSelectedDate = new Date(day.timestamp)
                    formattedSelectedDate.setDate(formattedSelectedDate.getDate() + 1)
                    console.log('Today date:', todayDate, 'Selected date:', formattedSelectedDate)
                    setTodayDate(formattedSelectedDate)                    
                }}
                markedDates={{
                    [(() => {                    
                        const date = new Date(todayDate)
                        date.setDate(date.getDate() - 1)
                        return date.toISOString().split('T')[0]})
                    || 
                        selectedDate]: { selected: true, selectedColor: '#0a7e8c' }
                }}
            />
            <Button
                title="voltar"
                onPress={() => navigation.goBack()} 
            />
        </>              
    )
}
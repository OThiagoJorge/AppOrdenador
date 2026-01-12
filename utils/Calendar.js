import { Calendar } from 'react-native-calendars'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../resources/Context'
import { listTasks } from '@/resources/database'

export const CalendarScreen = () => {
    // Todas as datas devem estar selecionadas por padrão, sendo possível realizar algumas
    // seleções específicas por meio de um menu de opções na parte inferior da tela
    // Inspire-se em outros apps, como despertadores ou agendas para esse caso
    const navigation = useNavigation()

    const {AddedTask, setAddedTask} = useContext(GlobalContext)

    const [Tasks, setTasks] = useState([])

    useEffect(() => {
        const loadData = async () => {
            value = listTasks()
            if (value) {setTasks(task => [...task, value])}
        }
        loadData()
        console.log(Tasks)
    }, [AddedTask])

    return (
        <>
            <Calendar
                onDayPress={day => {
                    console.log('selected day', day)
                    const todayTasks = Tasks.filter(task => {
                        return task.everyDay === true
                    })
                    console.log('Tasks for selected day:', todayTasks)
                    navigation.navigate('Home')
                }}
            />
            <Button
                title="voltar"
                onPress={() => navigation.goBack()} 
            />
        </>              
    )
}
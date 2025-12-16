import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../Context'

export const CalendarScreen = () => {
    // Todas as datas devem estar selecionadas por padrão, sendo possível realizar algumas
    // seleções específicas por meio de um menu de opções na parte inferior da tela
    // Inspire-se em outros apps, como despertadores ou agendas para esse caso
    const navigation = useNavigation()

    const {AddedTask, setAddedTask} = useContext(GlobalContext)

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
        <>
            <Calendar
                onDayPress={day => {
                    console.log('selected day', day)
                    const todayTasks = Tasks.filter(task => {
                        return task.everyDay === true
                    })
                    console.log('Tasks for selected day:', todayTasks)
            }}
            />
            <Button
                title="voltar"
                onPress={() => navigation.goBack()} 
            />
        </>              
    )
}
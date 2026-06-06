import { Calendar } from "react-native-calendars"
import React, { useEffect, useState, useContext } from "react"
import { Button, View } from "react-native"
import { generateDateRange, handleDayPress } from "../CalendarSelectionFunctions"
import { GlobalContext } from '@/resources/Context'

export const AddTasksCalendar = () => {

    const {selectedDates, setSelectedDates} = useContext(GlobalContext)

    const [markedDates, setMarkedDates] = useState({})    

    function resetDates() {
        setSelectedDates([
            { position: 0, date: null, filled: false },
            { position: 1, date: null, filled: false }
        ])
        setMarkedDates({})
    }

    useEffect(() => {

        const start = selectedDates[0].date
        const end = selectedDates[1].date

        if (!start) return

        if (!end) {
            setMarkedDates({
                [start]: {
                    startingDay: true,
                    endingDay: true,
                    color: '#0a7e8c',
                    textColor: 'white'
                }
            })
            return
        }

        const range = generateDateRange(start, end)

        setMarkedDates(range)
        console.log('markedDates', markedDates)
    }, [selectedDates])

    return (
        <View
            style={{marginVertical: 20}}
        >            
            <Calendar
                markingType={'period'}
                markedDates={markedDates}
            />    
            <Button
                title="Resetar"
                onPress={resetDates}
            />        
            <Button
                title="Manter seleção"
            />
        </View>
    )
}
import { Calendar } from "react-native-calendars"
import React, { useEffect, useState } from "react"
import { Button, View } from "react-native"

export const AddTasksCalendar = () => {

    const [selectedDates, setSelectedDates] = useState([
        { position: 0, date: null, filled: false },
        { position: 1, date: null, filled: false }
    ])

    const [markedDates, setMarkedDates] = useState({})

    function generateDateRange(start, end) {

        const dates = {}
        const startDate = new Date(start)
        const endDate = new Date(end)

        let current = new Date(startDate)

        while (current <= endDate) {

            const dateString = current.toISOString().split('T')[0]

            if (dateString === start) {
                dates[dateString] = {
                    startingDay: true,
                    color: '#0a7e8c',
                    textColor: 'white'
                }
            } else if (dateString === end) {
                dates[dateString] = {
                    endingDay: true,
                    color: '#0a7e8c',
                    textColor: 'white'
                }
            } else {
                dates[dateString] = {
                    color: '#0a7e8c',
                    textColor: 'white'
                }
            }

            current.setDate(current.getDate() + 1)
        }

        return dates
    }

    function handleDayPress(day) {

        const date = day.dateString

        setSelectedDates(prev => {

            const first = prev[0]
            const second = prev[1]

            // primeira data ainda não selecionada
            if (!first.filled) {
                return [
                    { ...first, date, filled: true },
                    second
                ]
            }

            // primeira já existe -> altera apenas a segunda
            return [
                first,
                { ...second, date, filled: true }
            ]
        })
    }

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

    }, [selectedDates])


    return (
        <View>
            <Calendar
                markingType={'period'}
                markedDates={markedDates}
                onDayPress={handleDayPress}
            />

            <Button
                title="Resetar"
                onPress={resetDates}
            />
        </View>
    )
}
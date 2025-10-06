import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

export const CalendarScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <Calendar
                onDayPress={day => {
                    console.log('selected day', day)
            }}
            />
            <Button
                title="voltar"
                onPress={() => navigation.goBack()} 
            />
        </>              
    )
}
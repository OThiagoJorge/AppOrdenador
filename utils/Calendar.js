import {Calendar, CalendarList, Agenda} from 'react-native-calendars'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'

export const CalendarScreen = () => {
    // Todas as datas devem estar selecionadas por padrão, sendo possível realizar algumas
    // seleções específicas por meio de um menu de opções na parte inferior da tela
    // Inspire-se em outros apps, como despertadores ou agendas para esse caso
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
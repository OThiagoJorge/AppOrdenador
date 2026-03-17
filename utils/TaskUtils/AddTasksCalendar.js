import { Calendar } from "react-native-calendars"

export const AddTasksCalendar = () => {
  return (
    <Calendar
          onDayPress={day => {
              console.log('selected day', day)
          }}
          markingType='period'
          markedDates={{
            '2026-03-20': {textColor: 'green'},
            '2026-03-22': {startingDay: true, color: 'green', textColor: 'white'},
            '2026-03-23': {color: 'green', textColor: 'white'},
            '2026-03-24': {color: 'green', textColor: 'white'},
            '2026-03-25': {endingDay: true, color: 'green', textColor: 'white'},
            '2026-03-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
          }}            
      /> 
  )
}
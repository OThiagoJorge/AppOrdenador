import { Text, View, Pressable } from 'react-native'
import { WeekDaysSelector } from './WeekDaysSelector'

export const WeekDaysSelector = ({selectedDays, toggleDay}) => {

    const days = [
        { key: 'dom', label: 'Dom' },
        { key: 'seg', label: 'Seg' },
        { key: 'ter', label: 'Ter' },
        { key: 'qua', label: 'Qua' },
        { key: 'qui', label: 'Qui' },
        { key: 'sex', label: 'Sex' },
        { key: 'sab', label: 'Sáb' }
    ]

  return (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
            backgroundColor: 'green',
            borderRadius: 10
        }}
    >
        {days.map(day => (
            <Pressable
                key={day.key}
                onPress={() => toggleDay(day.key)}
                style={{
                    backgroundColor: selectedDays[day.key] ? '#fff' : 'transparent',
                    padding: 12,
                }}
            >
                <Text style={{ color: selectedDays[day.key] ? '#000' : '#fff' }}>
                    {day.label}
                </Text>
            </Pressable>
        ))}
    </View>
  )
}
import { Text, View, TextInput } from 'react-native'
import { styles } from '../../Styles'

export const TaskTitle = ({ task, taskTitleInputIsVisible, setTaskTitleInputIsVisible, onChangeText, isChecked, inListMode }) => {
    return (
        <View 
            style={{
                marginLeft: inListMode ? 20 : 60,
                width: inListMode ? '100%' : '70%'
            }}
            onLongPress={() => setTaskTitleInputIsVisible(!taskTitleInputIsVisible)}
        >
            {taskTitleInputIsVisible ? (
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={task.text}
                    placeholder="Título"
                />
            )
            : (
                <Text 
                    style={{
                        textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', 
                        fontSize: 20,
                        backgroundColor: inListMode ? 'transparent' : 'yellow'
                    }}
                >
                    - {task.text}
                </Text>
            )}
        </View>
    )
}
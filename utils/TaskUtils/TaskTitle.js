import { Text, Pressable, TextInput, Alert } from 'react-native'
import { styles } from '../../Styles'

export const TaskTitle = ({task, taskTitleInputIsVisible, setTaskTitleInputIsVisible, onChangeText, isChecked}) => {
    return (
        <Pressable 
                    onPress={() =>Alert.alert(task.description)}
                    style={{
                        marginLeft: 60,
                        width: '70%'
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
                            width: '100%'
                        }}
                    >
                        - {task.text}
                    </Text>
                    )}
                </Pressable>
    )
}
import { updateTask } from '@/resources/database'
import { TextInput, Pressable, Text } from 'react-native'

export const TaskTitle = ({ task, taskTitleInputIsVisible, setTaskTitleInputIsVisible, onChangeText, inListMode }) => {
    return (
        <Pressable 
            style={{
                marginLeft: inListMode ? 20 : 60,
                width: inListMode ? '100%' : '70%'
            }}
            onLongPress={() => setTaskTitleInputIsVisible(!taskTitleInputIsVisible)}
        >            
            <TextInput
                style={{
                    fontSize: 20,
                    backgroundColor: inListMode ? 'transparent' : 'yellow'
                }}
                // Corrigir bug que impede o texto de ser alterado
                value={task.title}
                placeholder={"Título"}
                editable={taskTitleInputIsVisible}
                multiline={true}
            />
            <Pressable
                onPress={() => updateTask(task.id, {title: task.title})}
            >
                <Text>Enviar</Text>
            </Pressable>
        </Pressable>
    )
}
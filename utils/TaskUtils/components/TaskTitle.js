import { updateTask } from '@/resources/database'
import { TextInput, Pressable, Text } from 'react-native'
import { useState, useContext } from 'react'
import { GlobalContext } from '@/resources/Context'

export const TaskTitle = ({ task, taskTitleInputIsVisible, setTaskTitleInputIsVisible, onChangeText, inListMode }) => {

    const [title, setTitle] = useState(task.title)

    const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)

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
                value={title}
                placeholder={task.title}
                editable={taskTitleInputIsVisible}
                multiline={true}
                onChangeText={(text) => setTitle(text)}
            />
            {taskTitleInputIsVisible && 
                <Pressable
                    onPress={() => {
                        updateTask(task.id, title)
                        setTaskDidUpdate(!taskDidUpdate)
                    }}
                >
                    <Text>Enviar</Text>
                </Pressable>
    }
        </Pressable>
    )
}
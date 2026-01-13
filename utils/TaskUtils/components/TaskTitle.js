import { TextInput, Pressable } from 'react-native'

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
                onChangeText={onChangeText}
                value={task.title}
                placeholder={"Título"}
                editable={taskTitleInputIsVisible}
                multiline={true}
            />
        </Pressable>
    )
}
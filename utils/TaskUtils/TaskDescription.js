import { Pressable, TextInput, Alert, Text } from 'react-native'
import { styles } from '@/Styles'

export const TaskDescription = ({task, descriptionInputIsVisible, setDescriptionInputIsVisible, onChangeText}) => {
    return (
        <Pressable 
            onPress={() =>Alert.alert('clicado')}
            style={{
                marginLeft: 60,
                width: '70%',
                backgroundColor: '#0a7e8c'
            }}
            onLongPress={() => setDescriptionInputIsVisible(!descriptionInputIsVisible)}
        >
            <TextInput
                style={[styles.input, {color: 'white'}]}
                onChangeText={onChangeText}
                value={task.description}
                placeholder="Descrição"
                editable={descriptionInputIsVisible}
                multiline={true}
            />
            <Pressable
                onPress={() => updateTask(task.id, {description: task.description})}
            >
                <Text>Enviar</Text>
            </Pressable>
        </Pressable>
    )
}
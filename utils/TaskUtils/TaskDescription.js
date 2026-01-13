import { Pressable, TextInput, Alert } from 'react-native'
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
        </Pressable>
    )
}
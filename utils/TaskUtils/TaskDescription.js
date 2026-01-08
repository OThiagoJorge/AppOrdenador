import { Text, Pressable, TextInput, Alert } from 'react-native'
import { styles } from '../../Styles'

export const TaskDescription = ({task, descriptionInputIsVisible, setDescriptionInputIsVisible, onChangeText, isChecked}) => {
    return (
        <Pressable 
            onPress={() =>Alert.alert('clicado')}
            style={{
                marginLeft: 60,
                width: '70%',
                backgroundColor: '#454545ff'
            }}
            onLongPress={() => setDescriptionInputIsVisible(!descriptionInputIsVisible)}
        >
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={task.description}
                placeholder="Descrição"
                editable={descriptionInputIsVisible}
                multiline={true}
            />
        </Pressable>
    )
}
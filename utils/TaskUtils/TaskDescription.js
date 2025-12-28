import { Text, Pressable, TextInput, Alert } from 'react-native'
import { styles } from '../../Styles'

export const TaskDescription = ({task, descriptionInputIsVisible, setDescriptionInputIsVisible, onChangeText, isChecked}) => {
    return (
        <Pressable 
            onPress={() =>Alert.alert('clicado')}
            style={{
                marginLeft: 60,
                width: '70%',
                backgroundColor: 'gray'
            }}
            onLongPress={() => setDescriptionInputIsVisible(!descriptionInputIsVisible)}
        >
            {descriptionInputIsVisible ? (
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={task.description}
                    placeholder="Descrição"
                />
            )
            : 
                <Text 
                    style={{
                        textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', 
                        fontSize: 20,
                        width: '100%'
                    }}
                >
                    {task.description}
                </Text>
            }
        </Pressable>
    )
}
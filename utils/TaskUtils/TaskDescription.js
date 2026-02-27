import { Pressable, TextInput, Text } from 'react-native'
import { styles } from '@/Styles'
import { useState, useContext } from 'react'
import { GlobalContext } from '@/resources/Context'
import { updateTask } from '@/resources/database'

export const TaskDescription = ({task, descriptionInputIsVisible, setDescriptionInputIsVisible, onChangeText}) => {

    const [description, setDescription] = useState(task.description)

    const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)

    return (
        <Pressable 
            style={{
                marginLeft: 60,
                width: '70%',
                backgroundColor: '#0a7e8c'
            }}
            onLongPress={() => setDescriptionInputIsVisible(!descriptionInputIsVisible)}
        >
            <TextInput
                style={[styles.input, {color: 'white'}]}
                onChangeText={(text) => setDescription(text)}
                value={description}
                placeholder="Descrição"
                editable={descriptionInputIsVisible}
                multiline={true}
            />
            {descriptionInputIsVisible &&
                <Pressable
                    onPress={() => {
                        updateTask(task.id, {description: description})
                        setTaskDidUpdate(!taskDidUpdate)
                    }}
                >
                    <Text>Enviar</Text>
                </Pressable>
    }
        </Pressable>
    )
}
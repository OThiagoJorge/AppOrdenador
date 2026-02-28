import { Pressable, TextInput, Text, Modal, View } from 'react-native'
import { styles } from '@/Styles'
import { useState, useContext } from 'react'
import { GlobalContext } from '@/resources/Context'
import { updateTask } from '@/resources/database'

export const TaskDescription = ({task, descriptionInputIsVisible, setDescriptionInputIsVisible, onChangeText}) => {

    const [description, setDescription] = useState(task.description)
    const [modalVisible, setModalVisible] = useState(false)

    const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)

    return (
        <View>
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
                            setModalVisible(true)
                        }}
                    >
                        <Text>Enviar</Text>
                    </Pressable>
                }
            </Pressable>
            <Modal
                style={{marginTop: 100}}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    setModalVisible(!modalVisible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Alterar Descrição?</Text>
                        <Pressable
                            onPress={() => {
                                updateTask(task.id, {description: description})
                                setTaskDidUpdate(!taskDidUpdate)
                                setModalVisible(false)
                            }}
                        >
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sim</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
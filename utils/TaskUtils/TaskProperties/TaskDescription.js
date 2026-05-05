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
                    marginLeft: '25%',
                    marginRight: '15%',
                    width: '100%',
                    height: '70%',
                    backgroundColor: 'white',
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 10
                }}
            >
                <View style={{width: '100%', height: '100%', padding: 10}}>
                <TextInput
                    style={[styles.input, 
                        {   
                            color: 'white',
                            textDecorationLine: task.completed ? 'line-through' : 'none'
                        }
                    ]}
                    onChangeText={(text) => setDescription(text)}
                    value={description}
                    placeholder="Descrição"
                    editable={descriptionInputIsVisible}
                    multiline={true}
                />
                    <Pressable
                        onPress={() => {
                            setModalVisible(true)
                        }}
                    >
                        <Text>Enviar</Text>
                    </Pressable>        
                </View>        
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
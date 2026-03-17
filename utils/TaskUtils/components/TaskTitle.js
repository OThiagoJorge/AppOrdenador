import { updateTask } from '@/resources/database'
import { TextInput, Pressable, Text, Alert, View, Modal } from 'react-native'
import { useState, useContext } from 'react'
import { GlobalContext } from '@/resources/Context'
import { styles } from '@/Styles'

export const TaskTitle = ({ task, taskTitleInputIsVisible, setTaskTitleInputIsVisible, onChangeText, inListMode }) => {

    const [title, setTitle] = useState(task.title)
    const [modalVisible, setModalVisible] = useState(false)

    const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)

    return (
        <View>
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
                        backgroundColor: inListMode || taskTitleInputIsVisible ? 'gray' : 'yellow',
                        color: inListMode || taskTitleInputIsVisible ? 'white' : 'black',
                        textDecorationLine: task.completed ? 'line-through' : 'none',
                    }}
                    value={title}
                    placeholder={task.title}
                    editable={taskTitleInputIsVisible}
                    multiline={true}
                    onChangeText={(text) => setTitle(text)}
                />
                {taskTitleInputIsVisible && 
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
                        <Text style={styles.modalText}>Alterar título?</Text>
                        <Pressable
                            onPress={() => {
                                updateTask(task.id, title)
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
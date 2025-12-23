import { Text, Pressable, View, Modal, Alert } from 'react-native'
import { styles } from '../../Styles'
import { ProgressRotation } from '../ProgressRotation'
import { CheckOrHalfCheck } from '../CheckOrHalfCheck'
import * as Progress from 'react-native-progress'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'

export const TaskCard = ({task, isChecked, setChecked, goToAnotherPage, i}) => {

    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation()

    return ( 
        <View 
            style={{backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}}
            key={i}
        >
            <Modal
                style={{marginTop: 100}}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Ver progresso?</Text>
                        <Pressable
                            onPress={() => navigation.navigate('Progress')}
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
            {/* Utilizar possivelmente um useEffect e algum contador de tempo para desativar a exibição de ProgressRotation
            ao finalizar a rotação */}
            <ProgressRotation task={task} />
            <Pressable
                style={[
                    styles.task,
                    {backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}
                ]}
            >  
                <Pressable 
                    style={{height: '100%', width: 30, position: 'absolute', left: 0, top: 0, zIndex: 1}} 
                    onPress={() => setModalVisible(true)}
                />
                <Progress.Bar
                    style={styles.UpperProgressBar}
                    progress={0.1} 
                    width={null}
                    color='blue'
                    height={30}
                    useNativeDriver={false}
                />
                <Progress.Bar
                    style={{
                        height: 30, 
                        width: '100%', 
                        borderTopWidth: 2, 
                        borderWidth: 0, 
                        borderColor: 'black', 
                        borderRadius: 0, 
                        transform: [{ rotate: '90deg' }], 
                        position: 'absolute', 
                        left: -173, 
                        bottom: 70
                    }}
                    progress={0} 
                    width={null}
                    color='red'
                    height={30}
                    useNativeDriver={false}               
                />
                
                <Text style={{
                    textDecorationLine: isChecked[task.id] ? 'line-through' : 'none', 
                    fontSize: 20,
                    marginLeft: 60,
                    width: '70%'
                }}>
                    - {task.text}{'\n'}{task.Description}
                </Text>
                <CheckOrHalfCheck 
                    isChecked={isChecked} 
                    setChecked={setChecked} 
                    task={task} 
                    goToAnotherPage={goToAnotherPage}
                    i={i}
                />
            </Pressable>
        </View>
)}
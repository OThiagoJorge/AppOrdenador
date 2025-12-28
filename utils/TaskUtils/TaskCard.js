import { Text, Pressable, View, TextInput, Alert } from 'react-native'
import { styles } from '../../Styles'
import { ProgressRotation } from '../ProgressRotation'
import { CheckOrHalfCheck } from '../CheckOrHalfCheck'
import * as Progress from 'react-native-progress'
import React, {useState} from 'react'
import { AskToSeeProgressModal } from './AskToSeePogressModal'
import { TaskTitle } from './TaskTitle'

const TaskDescription = ({task, descriptionInputIsVisible, setDescriptionInputIsVisible, onChangeText, isChecked}) => {
    return (
                        <Pressable 
                    onPress={() =>Alert.alert('clicado')}
                    style={{
                        marginLeft: 60,
                        width: '70%'
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

export const TaskCard = ({task, isChecked, setChecked, goToAnotherPage, i}) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [text, onChangeText] = useState('Useless Text')
    const [taskTitleInputIsVisible, setTaskTitleInputIsVisible] = useState(false)
    const [descriptionInputIsVisible, setDescriptionInputIsVisible] = useState(false)

    return ( 
        <View 
            style={{backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}}
            key={i}
        >
            <AskToSeeProgressModal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible} 
            />
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
                    style={styles.BottomProgressBar}
                    progress={0} 
                    width={null}
                    color='red'
                    height={30}
                    useNativeDriver={false}               
                />
                <TaskTitle 
                    task={task} 
                    taskTitleInputIsVisible={taskTitleInputIsVisible} 
                    setTaskTitleInputIsVisible={setTaskTitleInputIsVisible} 
                    onChangeText={onChangeText} 
                    isChecked={isChecked} 
                />
                <TaskDescription 
                    task={task} 
                    descriptionInputIsVisible={descriptionInputIsVisible} 
                    setDescriptionInputIsVisible={setDescriptionInputIsVisible} 
                    onChangeText={onChangeText}
                    isChecked={isChecked}
                />
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
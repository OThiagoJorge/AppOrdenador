import { Pressable, View } from 'react-native'
import { styles } from '@/Styles'
import { ProgressRotation } from '../../ProgressRotation'
import { CheckOrHalfCheck } from '../../CheckOrHalfCheck'
import * as Progress from 'react-native-progress'
import React, {useState, useContext} from 'react'
import { AskToSeeProgressModal } from '../components/AskToSeePogressModal'
import { GlobalContext } from '@/resources/Context'
import { TaskTitleAndDescription } from '../components/TaskTitleAndDescription'
import { Timer } from '../components/Timer'
import { TaskDescription } from './TaskDescription'

export const TaskCard = ({task, goToAnotherPage, i}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const {showTimer, setShowTimer} = useContext(GlobalContext)
    const {taskTitleInputIsVisible, setTaskTitleInputIsVisible, descriptionInputIsVisible, setDescriptionInputIsVisible} = useContext(GlobalContext)    

    return ( 
        <View 
            key={i}
        >
            <AskToSeeProgressModal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible} 
            />
            {/* Utilizar possivelmente um useEffect e algum contador de tempo para desativar a exibição de ProgressRotation
            ao finalizar a rotação */}
            <ProgressRotation task={task} />
            {showTimer && (<Timer />)}            
            <Pressable
                style={[
                    styles.task,
                    {backgroundColor: task.completed ? '#d1fae5' : 'white', transition: '7s'}
                ]}
                onPress={() => {
                    setDescriptionInputIsVisible(false)
                    setTaskTitleInputIsVisible(false)
                }}
            >  
                <Pressable 
                    style={{
                        height: '100%',
                         width: 35, 
                         position: 'absolute', 
                         left: 0, 
                         top: 0, 
                         zIndex: 1, 
                         borderRightWidth: 0, 
                         borderColor: '#d1d5db'
                    }} 
                    onPress={() => setModalVisible(true)}
                />
                <Progress.Bar
                    style={styles.UpperProgressBar}
                    progress={0.1} 
                    width={null}
                    color='#0a7e8c'
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
                <CheckOrHalfCheck 
                    task={task} 
                    goToAnotherPage={goToAnotherPage}
                    i={i}
                />               
                <TaskTitleAndDescription 
                    task={task} 
                />
                <TaskDescription
                    task={task} 
                    descriptionInputIsVisible={descriptionInputIsVisible} 
                    setDescriptionInputIsVisible={setDescriptionInputIsVisible} 
                />
            </Pressable>
        </View>
)}
import { Pressable, View } from 'react-native'
import { styles } from '../../Styles'
import { ProgressRotation } from '../ProgressRotation'
import { CheckOrHalfCheck } from '../CheckOrHalfCheck'
import * as Progress from 'react-native-progress'
import React, {useState, useEffect, useContext} from 'react'
import { AskToSeeProgressModal } from './AskToSeePogressModal'
import { GlobalContext } from '../../Context'
import { TaskTitleAndDescription } from './TaskTitleAndDescription'
import { Timer } from './Timer'

export const TaskCard = ({task, isChecked, setChecked, goToAnotherPage, i}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const {showTimer, setShowTimer} = useContext(GlobalContext)

    const [timerCount, setTimer] = useState(60)
    
    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                if (lastTimerCount == 0) {
                } else {
                    lastTimerCount <= 1 && clearInterval(interval)
                    return lastTimerCount - 1
                }
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [showTimer])

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
            {showTimer && (<Timer />)}            
            <Pressable
                style={[
                    styles.task,
                    {backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}
                ]}
            >  
                <Pressable 
                    style={{
                        height: '100%',
                         width: 35, 
                         position: 'absolute', 
                         left: 0, 
                         top: 0, 
                         zIndex: 1, 
                         borderRightWidth: 5, 
                         borderColor: '#d1d5db'
                    }} 
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
                <TaskTitleAndDescription 
                    task={task} 
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
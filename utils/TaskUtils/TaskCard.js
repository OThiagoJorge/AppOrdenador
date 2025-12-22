import { Text, Pressable, View } from 'react-native'
import { styles } from '../../Styles'
import { ProgressRotation } from '../ProgressRotation'
import { CheckOrHalfCheck } from '../CheckOrHalfCheck'
import * as Progress from 'react-native-progress'

export const TaskCard = ({task, isChecked, setChecked, goToAnotherPage, i}) => {
    return ( 
        <View 
            style={{backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}}
            key={i}
        >
            {/* Utilizar possivelmente um useEffect e algum contador de tempo para desativar a exibição de ProgressRotation
            ao finalizar a rotação */}
            <ProgressRotation task={task} />
            <Pressable
                style={[
                    styles.task,
                    {backgroundColor: isChecked[task.id] ? '#d1fae5' : 'white', transition: '7s'}

                ]}
            >  
                <Progress.Bar
                    style={{height: 30, width: '100%', borderBottomWidth: 2, borderWidth: 0, borderColor: 'black', borderRadius: 0, transform: [{ rotate: '-90deg' }], position: 'absolute', left: -173, top: 70}}
                    progress={0.1} 
                    width={null}
                    color='blue'
                    height={30}
                    useNativeDriver={false}               
                />
                <Progress.Bar
                    style={{height: 30, width: '100%', borderTopWidth: 2, borderWidth: 0, borderColor: 'black', borderRadius: 0, transform: [{ rotate: '90deg' }], position: 'absolute', left: -173, bottom: 70}}
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
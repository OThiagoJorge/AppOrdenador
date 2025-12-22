import { Text, Pressable, View } from 'react-native'
import { styles } from '../../Styles'
import { ProgressRotation } from '../ProgressRotation'
import { CheckOrHalfCheck } from '../CheckOrHalfCheck'

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
                <Pressable style={{position: 'absolute', left: 0, width: '30', height: '100%',backgroundColor: 'gray', borderBlockColor: 'black', borderRightWidth: 2}}>

                </Pressable>
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
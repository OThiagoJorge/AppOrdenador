import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { GlobalContext } from '../Context'
import { Pressable } from 'react-native'
import React, {useContext} from 'react'

export const ProgressRotation = ({task}) => {
    const {isChecked, setChecked} = useContext(GlobalContext)
    return (
        <Pressable
            style={{
                borderRadius: 25,
                borderWidth: 0,
                padding: 10,
                color: 'white',
                opacity: isChecked[task.id] ? 1 : 0,
                position: 'absolute',
                right: 5,
                top: 5,
                zIndex: 1,
                transition: '7s'
            }}
        >
            <AnimatedCircularProgress
                duration={7000}
                size={55}
                width={5}
                fill={isChecked[task.id] ? 100 : 0}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="transparent"
            >
            </AnimatedCircularProgress>
        </Pressable>
    )
}
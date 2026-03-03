import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Pressable } from 'react-native'

export const ProgressRotation = ({task}) => {
    return (
        <Pressable
            style={{
                borderRadius: 25,
                borderWidth: 0,
                padding: 10,
                color: 'white',
                opacity: task.completed ? 1 : 0,
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
                fill={task.completed ? 100 : 0}
                tintColor="#0a7e8c"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="transparent"
            >
            </AnimatedCircularProgress>
        </Pressable>
    )
}
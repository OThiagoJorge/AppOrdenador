import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Pressable } from 'react-native'
import React, { useState } from 'react'

export const ProgressRotation = ({task}) => {
    const [fill, setFill] = useState(false)

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
                bottom: 12,
                zIndex: 1,
                transition: '7s'
            }}
        >
            <AnimatedCircularProgress
                duration={7000}
                size={55}
                width={5}
                fill={task.completed ? 100 : 0}
                tintColor= {fill ? "#0a7e8c" : "transparent"}
                onAnimationComplete={() => {
                    console.log('onAnimationComplete')
                    setFill(!fill)
                }}
                backgroundColor="transparent"
            >
            </AnimatedCircularProgress>
        </Pressable>
    )
}
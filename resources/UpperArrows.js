import { Pressable, Text } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { GlobalContext } from './Context'
import React, { useContext } from 'react'

export const ArrowLeft = ( {setDate, date } ) => {
    const {arrowIsClicked, setArrowIsClicked} = useContext(GlobalContext)

    return (
      <Pressable 
        onPress={() => {
        const newDate = new Date(date)
        newDate.setDate(newDate.getDate() - 1)
        setDate(newDate)
        setArrowIsClicked(!arrowIsClicked)
      }}>
        <Text 
          style={{fontWeight: 'bold',fontSize: 24, color: 'black'}}
        > 
          <SimpleLineIcons 
            name="arrow-left-circle" 
            size={24} 
            color="black" 
          />
        </Text>
      </Pressable>
    )
}

export const ArrowRight = ( {setDate, date } ) => {
    const {arrowIsClicked, setArrowIsClicked} = useContext(GlobalContext)

    return (
      <Pressable 
        onPress={() => {
          const newDate = new Date(date)
          newDate.setDate(newDate.getDate() + 1)
          setDate(newDate)
          setArrowIsClicked(!arrowIsClicked)
        }
      }>
        <Text 
          style={{fontWeight: 'bold',fontSize: 24, color: 'black'}}
        >
          <SimpleLineIcons 
            name="arrow-right-circle" 
            size={24} 
            color="black" 
          /> 
        </Text>
      </Pressable>
    )
}
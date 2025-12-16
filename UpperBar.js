import { GlobalContext } from './Context'
import { Pressable, Text } from 'react-native'
import React, { useState, useContext } from 'react'
import { View } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

export const UpperBar = () => {
    const navigation = useNavigation()

    const {isCard, setIsCard} = useContext(GlobalContext)
    const {arrowIsClicked, setArrowIsClicked} = useContext(GlobalContext)

    const [date, setDate] = useState(new Date())

    const formatDate = (d) => {
      const day = String(d.getDate()).padStart(2, "0")
      const month = String(d.getMonth() + 1).padStart(2, "0")
      const year = d.getFullYear()
      return `${day}/${month}/${year}`
    }

    return (
        // Fazer com quequando muito distante da data atual, clicando em onLongPress, volte para a data atual
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
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
          <Pressable 
              style={{position: 'absolute', left: 40}}
              onPress={() => navigation.navigate('Calendar')} 
            >
              <FontAwesome name="calendar" size={24} color="black" />
            </Pressable>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{formatDate(date)}</Text>
            <Pressable 
              style={{position: 'absolute', right: 40}}
              onPress={() => {
                setIsCard(!isCard)
              }}
            >
              <FontAwesome name="list" size={24} color="black" />
            </Pressable>
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
        </View>
    )
}
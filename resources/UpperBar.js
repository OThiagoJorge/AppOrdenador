import { GlobalContext } from './Context'
import { Pressable, Text } from 'react-native'
import React, { useContext } from 'react'
import { View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, ArrowRight } from './UpperArrows'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { MoreOptionUpperBar } from './MoreOptionsUpperBar'

export const UpperBar = () => {
  const navigation = useNavigation()

  const {isCard, setIsCard, todayDate, setTodayDate} = useContext(GlobalContext)

  const formatDate = (d) => {
    const day = String(d.getDate()).padStart(2, "0")
    const month = String(d.getMonth() + 1).padStart(2, "0")
    const year = d.getFullYear()
    return `${day}/${month}/${year}`
  }

  return (
      // Fazer com que quando muito distante da data atual, clicando em onLongPress, volte para a data atual
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <ArrowLeft
        date={todayDate}
        setDate={setTodayDate}
      />
      <Pressable 
        style={{position: 'absolute', left: 40}}
        onPress={() => {
          setIsCard(!isCard)
        }}
      >
        {isCard ? 
          <FontAwesome 
            name="list" 
            size={24} 
            color="black" 
          /> 
        : 
          <MaterialCommunityIcons 
            name="mirror-rectangle" 
            size={24} 
            color="black" 
          />
        }
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Calendar')}
      >
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{formatDate(todayDate)}</Text>
      </Pressable>
      <MoreOptionUpperBar />
      <ArrowRight
        date={todayDate} 
        setDate={setTodayDate}
      />
    </View>
  )
}
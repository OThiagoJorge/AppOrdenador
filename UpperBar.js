import { GlobalContext } from './Context'
import { Pressable, Text } from 'react-native'
import React, { useState, useContext } from 'react'
import { View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import Feather from '@expo/vector-icons/Feather'
import { ArrowLeft, ArrowRight } from './UpperArrows'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

export const UpperBar = () => {
  const navigation = useNavigation()

  const {isCard, setIsCard, showTimer, setShowTimer} = useContext(GlobalContext)

  const [date, setDate] = useState(new Date())

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
        date={date}
        setDate={setDate}
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
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{formatDate(date)}</Text>
      </Pressable>
      <Pressable 
        style={{position: 'absolute', right: 40}}
      >
        <Menu>
          <MenuTrigger>
            <Feather 
              name="more-horizontal" 
              size={24} 
              color="black" 
            />
          </MenuTrigger>
          <MenuOptions style={{padding: 15}}>
            <MenuOption 
              onSelect={() => navigation.navigate('Calendar')} 
              text='Calendário' 
            />
            <MenuOption 
              onSelect={() => navigation.navigate('Trash')} 
              text='Lixeira' 
            />
            {!showTimer ? (
              <MenuOption 
                onSelect={() => setShowTimer(!showTimer)}
                text='Exibir timer' 
              />
            ) : (
              <MenuOption
                onSelect={() => setShowTimer(!showTimer)}
                text='Ocultar timer' 
              />
            )}
          </MenuOptions>
        </Menu>
      </Pressable>
      <ArrowRight
        date={date} 
        setDate={setDate}
      />
    </View>
  )
}
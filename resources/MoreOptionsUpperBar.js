import { GlobalContext } from './Context'
import { Pressable } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import Feather from '@expo/vector-icons/Feather'

export const MoreOptionUpperBar = () => {
  const navigation = useNavigation()

  const {showTimer, setShowTimer} = useContext(GlobalContext)

  return (
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
  )
}
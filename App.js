import {Main} from './Main'
import { ContextProvider, GlobalContext } from './Context'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CalendarScreen } from './utils/Calendar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, Text } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { View } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome'

const UpperBar = () => {
    const {isListOrPage, setIsListOrPage} = useContext(GlobalContext)

    const [date, setDate] = useState(new Date())

    const formatDate = (d) => {
      const day = String(d.getDate()).padStart(2, "0")
      const month = String(d.getMonth() + 1).padStart(2, "0")
      const year = d.getFullYear()
      return `${day}/${month}/${year}`
    }

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Pressable onPress={() => {
            const newDate = new Date(date)
            newDate.setDate(newDate.getDate() - 1)
            setDate(newDate)
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
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{formatDate(date)}</Text>
            <Pressable 
              style={{position: 'absolute', right: 40}}
              onPress={() => {
                setIsListOrPage(!isListOrPage)
              }}
            >
              <FontAwesome name="list" size={24} color="black" />
            </Pressable>
          <Pressable onPress={() => {
            const newDate = new Date(date)
            newDate.setDate(newDate.getDate() + 1)
            setDate(newDate)
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

export const HomeScreen = () => {
    return (
      <Main />
    )
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerTitle: (props) => <UpperBar {...props} />,
      },
    },
    Calendar: CalendarScreen
  }
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <ContextProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#f3f4f6', borderWidth: 0}}>
        <Navigation />
      </SafeAreaView>
    </ContextProvider>
  )
}
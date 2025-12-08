import {Main} from './Main'
import { ContextProvider } from './Context'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CalendarScreen } from './utils/Calendar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'

const LogoTitle = () => {
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
              <SimpleLineIcons name="arrow-left-circle" size={24} color="black" />
            </Text>
          </Pressable>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{formatDate(date)}</Text>
          <Pressable onPress={() => {
            const newDate = new Date(date)
            newDate.setDate(newDate.getDate() + 1)
            setDate(newDate)
          }
          }>
            <Text 
              style={{fontWeight: 'bold',fontSize: 24, color: 'black'}}
            >
              <SimpleLineIcons name="arrow-right-circle" size={24} color="black" /> 
            </Text>
          </Pressable>
        </View>
    )
}

export const HomeScreen = () => {
    return (
        <ContextProvider>
            <Main />
        </ContextProvider>
    )
}

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerTitle: (props) => <LogoTitle {...props} />,
      },
    },
    Calendar: CalendarScreen
  }
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3f4f6', borderWidth: 0}}>
      <Navigation />
    </SafeAreaView>
  )
}
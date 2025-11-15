import {Main} from './Main'
import { ContextProvider } from './Context'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CalendarScreen } from './utils/Calendar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pressable, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

const LogoTitle = () => {
    const todaysDate = new Date()
    const [date, setDate] = useState(todaysDate.getTime())

    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Pressable onPress={() => {
            setDate(date - 86400000)
            alert(date)
          }}>
            <Text 
              style={{fontWeight: 'bold',fontSize: 24, color: 'black'}}> 
              {'<'} 
            </Text>
          </Pressable>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>15/11/2025</Text>
          <Pressable onPress={() => {
            setDate(date + 86400000)
            alert(date)
          }}>
            <Text 
              style={{fontWeight: 'bold',fontSize: 24, color: 'black'}}
            >
              {'>'} 
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
import {Main} from './Main'
import { ContextProvider } from './Context'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CalendarScreen } from './utils/Calendar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from 'react-native'

const LogoTitle = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const fullDate = `${day}/${month}/${year}`
    return (
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{fullDate}</Text>
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
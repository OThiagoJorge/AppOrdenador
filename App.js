import { Main } from './Main'
import { ContextProvider } from './Context'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CalendarScreen } from './utils/Calendar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UpperBar } from './UpperBar'

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
import { Main } from './Main'
import { ContextProvider } from './resources/Context'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CalendarScreen } from './utils/Calendar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UpperBar } from './resources/UpperBar'
import { MenuProvider } from 'react-native-popup-menu'
import { TrashScreen } from './utils/TrashScreen'
import { ProgressScreen } from './utils/ProgressScreen'
import { SQLiteProvider } from 'expo-sqlite'

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
        headerBackVisible: false
      },
    },
    Calendar: CalendarScreen,
    Trash: {
      screen: TrashScreen,
      options: {
        headerTitle: (props) => <UpperBar {...props} />,
        headerBackVisible: true
      },
    },
    Progress: {
      screen: ProgressScreen,
      options: {
        headerTitle: (props) => <UpperBar {...props} />,
        headerBackVisible: true
      },
    }
  }
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <SQLiteProvider 
      databaseName="myApp.db"
    >
      <ContextProvider>
      <MenuProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: '#f3f4f6', borderWidth: 0}}>
          <Navigation />
        </SafeAreaView>
      </MenuProvider>
    </ContextProvider>
    </SQLiteProvider>
  )
}
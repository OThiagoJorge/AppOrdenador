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
import { AddTasks } from './utils/TaskUtils/TaskProperties/AddTasks'
import { LocaleConfig } from 'react-native-calendars'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  monthNamesShort: [
    'Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.',
    'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'
  ],
  dayNames: [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'
  ],
  dayNamesShort: [
    'Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'
  ],
  today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br';

export const HomeScreen = () => {
    return (
      <Main />
    )
}
// In future change to use bottom tab navigator for better UX, but for now stack is good enough
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
    },
    AddTasks: {
      screen: AddTasks,
      options: {
        headerBackVisible: true
      }
    }
  }
})

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <ContextProvider>
      <MenuProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: '#f3f4f6', borderWidth: 0}} edges={['bottom']}>
          <Navigation />
        </SafeAreaView>
      </MenuProvider>
    </ContextProvider>
  )
}
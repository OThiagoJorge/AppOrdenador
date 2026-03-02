import { Text, Pressable } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as Progress from 'react-native-progress'
import { styles } from './Styles'
import { Tasks } from './utils/TaskUtils/Tasks'
import { useNavigation } from '@react-navigation/native'

export const Main = () => {

  const navigation = useNavigation()

  return (
    <>
      <StatusBar style="auto" />
      <Progress.Bar
        progress={0.3}
        width={null}
        height={30}
        color="#0a7e8c"
        borderWidth={0}
        borderRadius={0}
        useNativeDriver={false}
      />
      <Tasks />
      <Pressable
        onPress={() => navigation.navigate('AddTasks')}
        style={styles.button}
      >
        <Text style={styles.text}>+ Nova tarefa</Text>
      </Pressable>
    </>
  )
}
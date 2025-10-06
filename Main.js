import { Text, Pressable } from 'react-native'
import { styles } from './Styles'
import { AddTasks } from './utils/AddTasks'
import { MyPushNotifications } from './libs/Notifications'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Tasks } from './utils/Tasks'
import { GlobalContext } from './Context'
import React, {useContext} from 'react'
import { StatusBar } from 'expo-status-bar'

export const Main = () => {

  const { modalVisible, setModalVisible } = useContext(GlobalContext)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f3f4f6', borderWidth: 0}}>
      <StatusBar style={{borderWidth: 0}} />
      {/* <Pressable
        style={{
          width: '100%',
          height: 75,
          backgroundColor: '#2196F3',
          display: 'flex',
          alignItems: 'center',
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15
        }}
      >
        <Text style={styles.text}>Barra superior</Text>
      </Pressable> */}
      <Tasks />
      <Pressable
        title="+"
        onPress={() => {
          setModalVisible(!modalVisible)
        }}
        style={styles.button}
      >
        <Text style={styles.text}>+ Nova tarefa</Text>  
      </Pressable>
      {/* <MyPushNotifications /> */}
      <AddTasks />
    </SafeAreaView>      
  )
}

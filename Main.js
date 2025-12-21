import { Text, Pressable } from 'react-native'
import { styles } from './Styles'
import { AddTasks } from './utils/TaskUtils/AddTasks'
import { MyPushNotifications } from './libs/Notifications'
import { Tasks } from './utils/TaskUtils/Tasks'
import { GlobalContext } from './Context'
import React, {useContext} from 'react'
import { StatusBar } from 'expo-status-bar'

export const Main = () => {

  const { modalVisible, setModalVisible } = useContext(GlobalContext)

  return (
      <>
        <StatusBar style={'auto'} />
        <Pressable
          style={{height: 30, width: '100%', backgroundColor: '#0a7e8c'}}
        />
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
      </>  
  )
}
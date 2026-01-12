import { Text, Pressable } from 'react-native'
import { styles } from './Styles'
import { AddTasks } from './utils/TaskUtils/AddTasks'
import { MyPushNotifications } from './libs/Notifications'
import { Tasks } from './utils/TaskUtils/Tasks'
import { GlobalContext } from './resources/Context'
import React, {useContext} from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Progress from 'react-native-progress'
import { insertTask, createTable, listTasks } from '@/resources/database'

export const Main = () => {

  const { modalVisible, setModalVisible } = useContext(GlobalContext)

  return (
      <>
        <StatusBar style={'auto'} />
        <Progress.Bar
          style={{height: 30, width: '100%', borderWidth: 0, borderRadius: 0}}
          progress={0.3} 
          width={null}
          color='#0a7e8c'
          height={30}
          useNativeDriver={false}               
        />
        <Tasks />
        <Pressable onPress={createTable} style={styles.button}>
          <Text>Criar tabela</Text>
        </Pressable>
        <Pressable onPress={() => insertTask('Tarefa', 'Descrição da tarefa', true, new Date())} style={styles.button}>
          <Text>Inserir tarefa</Text>
        </Pressable>
        <Pressable onPress={listTasks} style={styles.button}>
          <Text>Listar tarefas</Text>
        </Pressable>
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
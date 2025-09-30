import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View, Modal, Pressable } from 'react-native'
import { styles } from './Styles'
import { AddTasks } from './AddTasks'
import { MyPushNotifications } from './libs/Notifications'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tasks } from './Tasks'
import { GlobalContext } from './Context'
import React, {useContext} from 'react'

export const Main = () => {

  const {isPressed, setDescriptionVisibility, DescriptionVisibility, modalVisible, setModalVisible, Description} = useContext(GlobalContext)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#2196F3'}}>
      <View style={styles.container}>
        <Pressable
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
          {isPressed.includes(true) && 
            <Pressable>
              <FontAwesome 
                name="trash" 
                size={24} 
                color="black" 
              />
            </Pressable>
          }
        </Pressable>
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
          <Tasks />
          {DescriptionVisibility ? 
            <Modal
              style={styles.description}
            >
              <Text style={styles.description}>{Description}</Text>
              <Pressable
                onPress={() => setDescriptionVisibility(!DescriptionVisibility)}
              >
                <Text>fechar</Text>
              </Pressable> 
            </Modal>
          : 
          null}
          <StatusBar style="auto" />
        </ScrollView>
        <Pressable
          title="+"
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
          style={styles.button}
        >
          <Text style={styles.text}>+ Nova tarefa</Text>  
        </Pressable>
        <MyPushNotifications />
        <AddTasks />
      </View>
    </SafeAreaView>      
  )
}

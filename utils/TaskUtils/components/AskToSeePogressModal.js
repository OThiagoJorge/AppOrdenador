import { Text, Pressable, View, Modal, Alert } from 'react-native'
import { styles } from '@/Styles'
import { useNavigation } from '@react-navigation/native'

export const AskToSeeProgressModal = ({ modalVisible, setModalVisible }) => {

    const navigation = useNavigation()

    return (
        <Modal
            style={{marginTop: 100}}
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.')
                setModalVisible(!modalVisible)
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Ver progresso?</Text>
                    <Pressable
                        onPress={() => navigation.navigate('Progress')}
                    >
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sim</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>fechar</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}
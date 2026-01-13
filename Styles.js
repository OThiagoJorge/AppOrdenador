import { StyleSheet } from 'react-native'
import { styles1 } from './styles1'

export const styles0 = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  UpperProgressBar: {
    height: 30, 
    width: '100%', 
    borderBottomWidth: 0, 
    borderWidth: 0, 
    borderColor: 'black', 
    borderRadius: 0, 
    transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    left: -173, 
    top: 70,
    backgroundColor: '#f0f0f0'
  },
  BottomProgressBar: {
    height: 30, 
    width: '100%', 
    borderTopWidth: 0, 
    borderWidth: 0, 
    borderColor: 'black', 
    borderRadius: 0, 
    transform: [{ rotate: '90deg' }], 
    position: 'absolute', 
    left: -173, 
    bottom: 70,
    backgroundColor: '#f0f0f0'
  }
})

export const styles = StyleSheet.create({
  ...styles0,
  ...styles1
})
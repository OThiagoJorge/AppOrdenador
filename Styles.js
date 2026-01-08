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
    borderBottomWidth: 2, 
    borderWidth: 0, 
    borderColor: 'black', 
    borderRadius: 0, 
    transform: [{ rotate: '-90deg' }], 
    position: 'absolute', 
    left: -173, 
    top: 70
  },
  BottomProgressBar: {
    height: 30, 
    width: '100%', 
    borderTopWidth: 2, 
    borderWidth: 0, 
    borderColor: 'black', 
    borderRadius: 0, 
    transform: [{ rotate: '90deg' }], 
    position: 'absolute', 
    left: -173, 
    bottom: 70
  },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // }
})

export const styles = StyleSheet.create({
  ...styles0,
  ...styles1
})
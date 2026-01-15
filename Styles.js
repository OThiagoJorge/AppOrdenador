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
  },
  dropdownButtonStyle: {
      width: 200,
      height: 50,
      backgroundColor: '#E9ECEF',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
    }
})

export const styles = StyleSheet.create({
  ...styles0,
  ...styles1
})
import { StyleSheet } from 'react-native'

export const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  button: {
    width: '100%',
    height: 75,
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 0,
    borderRadius: 25,
    padding: 10,
    width: '90%',
    backgroundColor: '#0a7e8c'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white',
    borderWidth: 0
  },
  task: {
    fontSize: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    flexGrow: 1,
    marginVertical: 0,
    borderBottomWidth: 10,
    borderColor: '#d1d5db'
  },
  description: {
    fontSize: 20,
    backgroundColor: 'white'
  },
  checkbox: {
    margin: 0,
    width: '100%',
    height: 40
  },
   pagerView: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  }
})
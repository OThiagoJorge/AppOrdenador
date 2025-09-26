import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    backgroundColor: '#2196F3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white'
  },
  task: {
    fontSize: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    padding: 15
  },
  description: {
    fontSize: 20,
    margin: 20,
    height: 300,
  },
  checkbox: {
    margin: 8,
  }
})
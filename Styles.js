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
    padding: 50,
    backgroundColor: '#fff',
    width: '100%',
    flexGrow: 1,
    marginVertical: 10,
    borderBottomWidth: 10,
    borderColor: '#d1d5db'
  },
  description: {
    fontSize: 20,
    backgroundColor: 'white'
  },
  checkbox: {
    margin: 8,
  },
   pagerView: {
    flex: 1
  }
})
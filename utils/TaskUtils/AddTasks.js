import { Text, TextInput, View, Pressable } from 'react-native'
import React, {useState, useContext} from 'react'
import { GlobalContext } from '@/resources/Context'
import { styles } from '@/Styles'
import { insertTask } from '@/resources/database'
import { DropdownExibitionPattern } from './DropdownExibitionPattern'
import { Calendar } from 'react-native-calendars'
import SelectDropdown from 'react-native-select-dropdown'

export const AddTasks = () => {

    const {AddedTask, setAddedTask, description, setDescription} = useContext(GlobalContext)

    const [text, setText] = useState('')

  return (
    <View
        style={{flex: 1, height: '100%', backgroundColor: '#f3f4f6', alignItems: 'center'}}     
    >
        <TextInput
            style={{height: 40, padding: 5}}
            placeholder="Título"
            onChangeText={newText => {
                setText(newText)
            }}            
        />
        <TextInput
            style={{height: 40, padding: 5}}
            placeholder="Descrição"
            onChangeText={newText => {
                setDescription(newText)
            }}            
        />
        <DropdownExibitionPattern />
        <SelectDropdown
            data={['Opção 1', 'Opção 2', 'Opção 3']}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
        />
        <Calendar
            onDayPress={day => {
                console.log('selected day', day)
            }}
        />        
        <Pressable
            onPress={() => {
                insertTask(text, description, false, true)
                setAddedTask(!AddedTask)
            }}      
            style={[styles.button, {bottom: 0, position: 'absolute'}]}
            >
            <Text style={styles.text}>+ Adicionar tarefa</Text>
        </Pressable>       
    </View>
)}
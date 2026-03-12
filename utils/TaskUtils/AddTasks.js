import { Text, TextInput, View, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { GlobalContext } from '@/resources/Context'
import { styles } from '@/Styles'
import { insertTask, dropTable, createTable } from '@/resources/database'
import { DropdownExibitionPattern } from './DropdownExibitionPattern'
import { Calendar } from 'react-native-calendars'
import { WeekDaysSelector } from './WeekDaysSelector'

export const AddTasks = () => {

  const {AddedTask, setAddedTask, description, setDescription, showWeekDaysSelector, setShowWeekDaysSelector} = useContext(GlobalContext)

  const [text, setText] = useState('')
  const [count, setCount] = useState(0)
  const [selectedDays, setSelectedDays] = useState({
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
    dom: false
  })

  const toggleDay = (day) => {
    setSelectedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }))
  }

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0))
  }

  return (
    <View
        style={{flex: 1, height: '100%', backgroundColor: '#f3f4f6', alignItems: 'center'}}     
    >
        <TextInput
            style={{width: '100%', height: 40, padding: 5}}
            placeholder="Título"
            onChangeText={newText => {
                setText(newText)
            }}            
        />
        <TextInput
            style={{width: '100%', height: 40, padding: 5}}
            placeholder="Descrição"
            onChangeText={newText => {
                setDescription(newText)
            }}            
        />
        <DropdownExibitionPattern />
        {showWeekDaysSelector && (
          <WeekDaysSelector
            selectedDays={selectedDays}
            toggleDay={toggleDay}
          />
        )}
        <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 20}}>
          <Pressable onPress={decrement}>
            <Text>-</Text>
          </Pressable>
          <Text style={{marginHorizontal: 10, fontSize: 18}}>{count}</Text>
          <Pressable onPress={increment}>
            <Text>+</Text>
          </Pressable>
        </View>
        <Calendar
            onDayPress={day => {
                console.log('selected day', day)
            }}
            markingType='period'
            markedDates={{
              '2026-03-20': {textColor: 'green'},
              '2026-03-22': {startingDay: true, color: 'green', textColor: 'white'},
              '2026-03-23': {color: 'green', textColor: 'white'},
              '2026-03-24': {color: 'green', textColor: 'white'},
              '2026-03-25': {endingDay: true, color: 'green', textColor: 'white'},
              '2026-03-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
            }}            
        />        
        <Pressable
            onPress={() => {                
                createTable()
                insertTask(text, description, false, true, false)
                setAddedTask(!AddedTask)
            }}      
            style={[styles.button, {bottom: 0, position: 'absolute'}]}
        >
          <Text style={styles.text}>+ Adicionar tarefa</Text>
        </Pressable>       
    </View>
)}
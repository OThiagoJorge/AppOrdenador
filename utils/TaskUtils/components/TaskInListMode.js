import { View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'
import React, { useContext } from 'react'
import { updateTask } from '@/resources/database'
import { GlobalContext } from '@/resources/Context'
import { TaskTitleAndDescriptionInListMode } from './TasktitleAndDescriptionInListMode'

export const TaskInListMode = ({task, i}) => {

    const {taskDidUpdate, setTaskDidUpdate} = useContext(GlobalContext)
    const {trashScreenHaveBeenAccessed, setTrashScreenHaveBeenAccessed} = useContext(GlobalContext)

    return (
        <View 
            style={{
                backgroundColor: task.completed ? '#d1fae5' : 'white',
                transition: '7s', 
                flexDirection: 'row', 
                alignItems: 'center', 
                borderRadius: 10, 
                display: 'grid'
            }}
            key={i}
        >
            <TaskTitleAndDescriptionInListMode task={task} />
            {!trashScreenHaveBeenAccessed && (
            <Menu>
                <MenuTrigger>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </MenuTrigger>
                
                <MenuOptions style={{padding: 15}}>                    
                    <MenuOption 
                        onSelect={
                            () => updateTask(task.id, task.title, task.description, task.completed, task.everyDay, true)
                            .then(() => {
                                setTaskDidUpdate(!taskDidUpdate)
                                console.log('Tarefa excluída:', task)
                            })                            
                        } 
                        text='Excluir' 
                    />
                    <MenuOption 
                        onSelect={
                            () => updateTask(task.id, task.title, task.description, task.completed, task.everyDay, false)
                            .then(() => {
                                setTaskDidUpdate(!taskDidUpdate)
                                console.log('Tarefa restaurada:', task)
                            })                            
                        } 
                        text='Restaurar' 
                    />
                </MenuOptions>                    
            </Menu>
            )}
        </View>
    )
}
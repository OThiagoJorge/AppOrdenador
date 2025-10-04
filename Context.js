import React, {useState, createContext} from 'react'

export const GlobalContext = createContext(null)

export const ContextProvider = ({children}) => {

    const [AddedTask, setAddedTask] = useState(false)
    const [Description, setDescription] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <GlobalContext value={{AddedTask, setAddedTask, modalVisible, setModalVisible, Description, setDescription}}>
            {children}
        </GlobalContext>
    )
}
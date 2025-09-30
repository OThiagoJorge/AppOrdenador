import React, {useState, createContext} from 'react'

export const GlobalContext = createContext(null)

export const ContextProvider = ({children}) => {

    const [AddedTask, setAddedTask] = useState(false)
    const [Description, setDescription] = useState('')
    const [modalVisible, setModalVisible] = useState(false)
    const [DescriptionVisibility, setDescriptionVisibility] = useState(false)
    const [isPressed, setPressed] = useState([])

    return (
        <GlobalContext value={{AddedTask, setAddedTask, modalVisible, setModalVisible, Description, setDescription, isPressed, setPressed, DescriptionVisibility, setDescriptionVisibility}}>
            {children}
        </GlobalContext>
    )
}
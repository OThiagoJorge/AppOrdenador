import React, {useState, createContext} from 'react'

export const GlobalContext = createContext(null)

export const ContextProvider = ({children}) => {

    const [AddedTask, setAddedTask] = useState(false)
    const [description, setDescription] = useState('')
    const [isChecked, setChecked] = useState([])
    const [isCard, setIsCard] = useState(false)
    const [arrowIsClicked, setArrowIsClicked] = useState(false)
    const [showTimer, setShowTimer] = useState(false)
    const [taskDidUpdate, setTaskDidUpdate] = useState(false)
    const [taskTitleInputIsVisible, setTaskTitleInputIsVisible] = useState(false)
    const [descriptionInputIsVisible, setDescriptionInputIsVisible] = useState(false)

    return (
        <GlobalContext 
            value={{
                AddedTask, setAddedTask, 
                description, setDescription, 
                isChecked, setChecked,
                isCard, setIsCard,
                arrowIsClicked, setArrowIsClicked,
                showTimer, setShowTimer,
                taskDidUpdate, setTaskDidUpdate,
                taskTitleInputIsVisible, setTaskTitleInputIsVisible,
                descriptionInputIsVisible, setDescriptionInputIsVisible
        }}>
            {children}
        </GlobalContext>
    )
}
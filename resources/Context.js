import React, {useState, createContext} from 'react'

export const GlobalContext = createContext(null)

export const ContextProvider = ({children}) => {

    const [AddedTask, setAddedTask] = useState(false)
    const [description, setDescription] = useState('')
    const [isCard, setIsCard] = useState(false)
    const [arrowIsClicked, setArrowIsClicked] = useState(false)
    const [showTimer, setShowTimer] = useState(false)
    const [taskDidUpdate, setTaskDidUpdate] = useState(false)
    const [taskTitleInputIsVisible, setTaskTitleInputIsVisible] = useState(false)
    const [descriptionInputIsVisible, setDescriptionInputIsVisible] = useState(false)
    const [Tasks, setTasks] = useState([])
    const [completedPercentage, setCompletedPercentage] = useState(0)
    const [showWeekDaysSelector, setShowWeekDaysSelector] = useState(false)
    const [todayDate, setTodayDate] = useState(new Date())
    const [trashScreenHaveBeenAccessed, setTrashScreenHaveBeenAccessed] = useState(false)

    return (
        <GlobalContext 
            value={{
                AddedTask, setAddedTask, 
                description, setDescription, 
                isCard, setIsCard,
                arrowIsClicked, setArrowIsClicked,
                showTimer, setShowTimer,
                taskDidUpdate, setTaskDidUpdate,
                taskTitleInputIsVisible, setTaskTitleInputIsVisible,
                descriptionInputIsVisible, setDescriptionInputIsVisible,
                Tasks, setTasks,
                completedPercentage, setCompletedPercentage,
                showWeekDaysSelector, setShowWeekDaysSelector,
                todayDate, setTodayDate,
                trashScreenHaveBeenAccessed, setTrashScreenHaveBeenAccessed                
        }}>
            {children}
        </GlobalContext>
    )
}
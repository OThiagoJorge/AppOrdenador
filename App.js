import {Main} from './Main'
import { ContextProvider } from './Context'

export const App = () => {
    return (
        <ContextProvider>
            <Main />
        </ContextProvider>
    )
}
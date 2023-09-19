import { createContext, useContext, useReducer } from 'react';
import { reducer } from './useReducer';
//create context
const myContext = createContext({});
//custom hook using useContext
export const useCustomContext = () => {
    return useContext(myContext);
}
//provider function for children
const UsersProvider = ({ children }) => {
    const initialState = {
        users: [
            { id: 1, username: 'Shahriar' },
            { id: 2, username: 'Hossain' }
        ]
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return <myContext.Provider value={{ state, dispatch }}>{children}</myContext.Provider>
}
export default UsersProvider;
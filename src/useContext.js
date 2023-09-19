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

    const value = {
        users: state.users,
        addUser: (newUser) => {
            dispatch({ type: "ADD_USER", payload: newUser });
        },
        deleteUser: (id) => {
            dispatch({ type: "DELETE_USER", payload: id });
        }

    }

    return <myContext.Provider value={value}>{children}</myContext.Provider>
}
export default UsersProvider;
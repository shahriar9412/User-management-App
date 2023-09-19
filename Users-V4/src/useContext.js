import { createContext, useState, useContext } from 'react';
//create context
const myContext = createContext({});
//custom hook using useContext
export const useCustomContext = () => {
    return useContext(myContext);
}
//provider function for children
const UsersProvider = ({ children }) => {

    const [users, setUsers] = useState([
        { id: 1, username: 'Shahriar' },
        { id: 2, username: 'Hossain' }
    ]);

    return <myContext.Provider value={{ users, setUsers }}>{children}</myContext.Provider>
}
export default UsersProvider;
import React, { useState } from 'react'
import Users from './components/Users'
import './index.css'
import NewUser from './components/NewUser';
import { myContext } from './useContext';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Shahriar' },
    { id: 2, username: 'Hossain' }
  ]);

  return (
    <myContext.Provider value={{ users, setUsers }}>
      <NewUser />
      <Users />
    </myContext.Provider>
  )
}

export default App

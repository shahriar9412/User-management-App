import React, { useState } from 'react'
import { myContext } from './useContext';

import Users from './components/Users'
import NewUser from './components/NewUser';

import './index.css'


const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Shahriar' },
    { id: 2, username: 'Hossain' }
  ]);

  return (
    <myContext.Provider value={{ users, setUsers }}>
      <h1>User Registration</h1>
      <NewUser />
      <Users />
    </myContext.Provider>
  )
}

export default App

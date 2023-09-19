import React from 'react';
import UsersProvider from './useContext';

import Users from './components/Users'
import NewUser from './components/NewUser';

import './index.css'
const App = () => {
  return (
    <UsersProvider>
      <h1>User Registration</h1>
      <NewUser />
      <Users />
    </UsersProvider>
  )
}
export default App

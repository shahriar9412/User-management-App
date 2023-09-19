import React, { useState } from 'react'
import Users from './components/Users'
import './index.css'
import NewUser from './components/NewUser';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'Shahriar' },
    { id: 2, username: 'Hossain' }
  ]);
  const handleDeleteUser = (id) => {
    const filtedUsers= users.filter(user => user.id !== id);
    setUsers(filtedUsers);
  }
  const handleBringUser=(user) => {
    setUsers(prevUsers=>[...prevUsers,user]);
  }
  return (
    <div>
      <NewUser handleBringUser={handleBringUser} />
      <Users users={users} handleDeleteUser={handleDeleteUser} />
    </div>
  )
}

export default App

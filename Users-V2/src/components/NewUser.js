import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { myContext } from '../useContext';

const NewUser = () => {
    const { setUsers } = useContext(myContext)
    const [username, setUsername] = useState('');
    const handleUsersChange = (e) => {
        setUsername(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: uuidv4(), username: username }
        setUsers(prevUsers => [...prevUsers, newUser]);
        setUsername('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='username'
                    placeholder='Username'
                    value={username}
                    onChange={handleUsersChange}
                    required
                />
                <button type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default NewUser

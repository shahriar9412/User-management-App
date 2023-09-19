import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const NewUser = ({handleBringUser}) => {
    const [username, setUsername] = useState('');
    const handleUsersChange = (e) => {
        setUsername(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: uuidv4(), username: username }
        handleBringUser(newUser);
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

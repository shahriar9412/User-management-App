import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useCustomContext } from '../useContext';

const NewUser = () => {
    const { dispatch } = useCustomContext();
    const [username, setUsername] = useState('');
    const handleUsersChange = (e) => {
        setUsername(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: uuidv4(), username: username }
        dispatch({ type: "ADD_USER", payload: newUser });
        setUsername('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
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

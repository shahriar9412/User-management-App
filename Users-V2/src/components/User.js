import React, { useContext } from 'react'
import { myContext } from '../useContext';

const User = ({ user }) => {
    const { users, setUsers } = useContext(myContext)
    const { id, username } = user;
    const handleDelete = (id) => {
        const filtedUsers = users.filter(user => user.id !== id);
        setUsers(filtedUsers);
    }
    return (
        <article className='user'>
            <h2>{id}</h2>
            <p>{username}</p>
            <button onClick={() => { handleDelete(id) }}>Delete</button>
        </article>
    )
}

export default User

import React from 'react'
import { useCustomContext } from '../useContext';

const User = ({ user }) => {
    const { id, username } = user;
    const { deleteUser } = useCustomContext();
    
    const handleDelete = (id) => {
        deleteUser(id);
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

import React from 'react'
import { useCustomContext } from '../useContext';

const User = ({ user }) => {
    const { id, username } = user;
    const { dispatch } = useCustomContext();
    
    const handleDelete = (id) => {
        dispatch({ type: "DELETE_USER", payload: id });
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

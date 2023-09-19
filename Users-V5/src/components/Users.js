import React from 'react'
import User from './User'
import { useCustomContext } from '../useContext'

const Users = () => {
    const { state } = useCustomContext();
    return (
        <section className='users'>
            {state.users.map(user => <User key={user.id} user={user} />)}
        </section>
    )
}
export default Users

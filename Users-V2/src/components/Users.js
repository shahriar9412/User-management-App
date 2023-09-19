import React, { useContext } from 'react'
import User from './User'
import { myContext } from '../useContext'

const Users = () => {
    const { users } = useContext(myContext)
    return (
        <section className='users'>
            {users.map(user => <User key={user.id} user={user} />)}
        </section>
    )
}

export default Users

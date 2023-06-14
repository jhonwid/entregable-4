import React from 'react'
import User from './User'

const ListUser = () => ({users, deleteUser, changeShowModal, setIsUserToUpdate}) => {
  
    return (
    <section className='grid gap-6 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1024px] mx-auto my-6
    '>
        {
        users.map((user) => 
        <User 
        key={user.id} 
        user={user} 
        deleteUser={deleteUser} 
        changeShowModal={changeShowModal}
        setIsUserToUpdate={setIsUserToUpdate} 
        />)
        }

    </section>
  )
}

export default ListUser     
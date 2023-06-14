import React, { useState } from 'react'

const User = ({user, deleteUser, changeShowModal, setIsUserToUpdate}) => {

  const handleClickDelete = () => {
    deleteUser(user.id)
  }

  const handleClickUpdate = () => {
    changeShowModal()
    setIsUserToUpdate(user)
  }

  return (
   <article className='arti_user text-left gap-6 pl-3 pr-3 pt-4 pb-4 space-y-4 rounded-md'> 

      <h4 className='text_name text-2xl'>{user.first_name} {user.last_name}</h4>

      <div>
        <h5 className='text-lg text-gray-100'>CORREO</h5>
        <span className='text-lg'>{user.email}</span>
      </div>

      <div className='text_birthday'>
        <h5 className='text-lg text-gray-100'>CUMPLEAÑOS</h5>
        <span className='text-lg'><i className='bx bx-gift p-1'></i>{user.birthday || "Sin datos"}</span>
      </div>

      <div className='btn_user'>

<button onClick={handleClickDelete} className='p-1'><i className='bx bx-trash bx bx-trash bg-gray-400 p-3 px-4 rounded-md hover:bg-secondary text-white'></i></button> 

      <button onClick={handleClickUpdate}><i className='bx bx-pencil bg-gray-400 p-3 px-4 rounded-md hover:bg-secondary text-white'></i></button>
      </div>
    </article>
  )
}

export default User
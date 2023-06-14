import React from 'react'

const Header = ({changeShowModal}) => {

    const handleClickShowModal = () => {
        changeShowModal()
    }

  return (
    <section className='flex justify-between items-center p-4'>

        <h1 className='font-bold text-white text-2xl'>USUARIOS</h1>
        
        <button onClick={handleClickShowModal} className='btn-primary hover:bg-secondary rounded-md'><i className='bx bx-plus hover:bg-secondary'></i>Crear nuevo usuario</button>

    </section>
  )
}

export default Header
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ModalForm = ({
  isShowModal, 
  createUser, 
  isUserToUpdate,  
  updateUser, 
  resetModalForm,
}) => {

    const [control, setControl] = useState("")

    const {register, handleSubmit, reset} = useForm()

    const submit = (data) => {
        if(!data.birthday) data.birthday = null
        if(isUserToUpdate){
          updateUser(data, reset)
        }else{
          createUser(data, reset)
        }
    }

    const handleCloseModal = () => {
      resetModalForm(reset)
    }

  //   const handleChangeInputControlled = (e) => {
  //     setControl(e.target.value)
  // }

    useEffect (() => {
      if(isUserToUpdate){
        reset(isUserToUpdate)
      }
    }, [isUserToUpdate])
  
    return (
    
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShowModal ? "opacity-100 visible" : "invisible opacity-0"} transition-opacity`}>

    <form onSubmit={handleSubmit(submit)} className=' bg-blue-200 p-4 w-[280px] grid gap-6 relative rounded-lg'>
    
    <h3 className='font-bold text-3xl text-left'>{isUserToUpdate ? "Editar usuario" : "Nuevo usuario"}</h3>

    {/*//* Nombre */}
    <div className='grid gap-2'>
        <label className='font-bold text-sm text-left' htmlFor="">Nombre</label>
        <input 
        onChange={e => setControl(e.target.value)} //? Input Controlado
        placeholder="Ingresa tu nombre..." 
        className='bg-gray-100 outline-none p-2 rounded-lg' 
        type="text" 
        {...register('first_name')}/>
    </div>

    {/*//TODO Apellido */}
    <div className='grid gap-2'>
        <label className='font-bold text-sm text-left' htmlFor="">Apellido</label>
        <input 
        onChange={e => setControl(e.target.value)} //? Input Controlado
        placeholder="Ingresa tu apellido..." 
        className='bg-gray-100 outline-none p-2 rounded-lg' 
        type="text" 
        // value={control} onChange={handleChangeInputControlled}
        {...register('last_name')}
        />
    </div>

      {/*//! Correo */}
      <div className='grid gap-2'>
        <label className='font-bold text-sm text-left' htmlFor="">Correo</label>
        <input 
        onChange={e => setControl(e.target.value)} //? Input Controlado
        placeholder="Ingresa tu correo..." 
        className='bg-gray-100 outline-none p-2 rounded-lg' 
        type="email" 
        // value={control} onChange={handleChangeInputControlled}
        {...register('email')}
        />
    </div>

      {/*//? Contraseña */}
      <div className='grid gap-2'>
        <label className='font-bold text-sm text-left' htmlFor="">Contraseña</label>
        <input 
        onChange={e => setControl(e.target.value)} //? Input Controlado
        placeholder="Ingresa tu contraseña..." 
        className='bg-gray-100 outline-none p-2 rounded-lg' 
        type="password" 
        // value={control} onChange={handleChangeInputControlled}
        {...register('password')}
        />
    </div>

      {/*//* Cumpleaños */}
      <div className='grid gap-2'>
        <label className='font-bold text-sm text-left' htmlFor="">Correo</label>
        <input 
        onChange={e => setControl(e.target.value)} //? Input Controlado
        placeholder="Ingresa tu cumpleaños..." 
        className='bg-gray-100 outline-none p-2 rounded-lg' 
        type="date" 
        // value={control} onChange={handleChangeInputControlled}
        {...register('birthday')}
        />
    </div>

    <button onClick={handleCloseModal} type='button' className='absolute top-2 right-2 text-2xl hover:text-secondary'><i className='bx bx-x'></i></button>

    <button className='btn-primary hover:bg-secondary'>{isUserToUpdate ? "Guardar cambios" : "Agregar nuevo usuario"}</button>

    </form>  
    </section>
  )
}

export default ModalForm
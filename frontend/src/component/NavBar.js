import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const {task,error}=useSelector((state)=>state.task)
  return (
    <div className='text-center my-2 '>
        <h1 className='font-bold text-[34px] text-blue-500'>Project Management</h1>
        <p>{`Currently ${task.length} task(s) pending`}</p>
        {error !=="" ? <h1 className='text-red-400'>{error.error}</h1>:null}
    </div>
  )
}

export default NavBar
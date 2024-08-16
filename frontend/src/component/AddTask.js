import React, {  useState } from 'react'
import {  postTaskFroNServer } from '../slices/taskSlice'
import { useDispatch } from 'react-redux'

const AddTask = () => {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    const dispatch=useDispatch()
    // const {task}=useSelector((state)=>state.task)

   
    const addTaskIn=(e)=>{
        e.preventDefault()
        setTitle("")
        setDescription("")
        dispatch(postTaskFroNServer({title,description}))
      

    }

 



    return (
        <form action="#" className='flex gap-2 flex-col  '>
            <div className="flex flex-col gap-1 ">
                <label htmlFor="title">Task title</label>
                <input type="text" placeholder='Enter Task Title' className='focus:outline-none px-2 py-2 border border-gray-300 rounded' value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="description">Task description</label>
                <input type="text" placeholder='Enter Task Description' className='focus:outline-none px-2 py-2 border border-gray-300 rounded'  value={description} onChange={(e)=>setDescription(e.target.value)}   />
            </div>
           <div className="btn text-end">
       <input type="submit" value="Submit"  className='bg-blue-400 px-2 py-1 w-fit rounded text-[#fff] ' onClick={addTaskIn}  />
           </div>
        </form>
    )
}

export default AddTask
import React, { useEffect, useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import icon from '../icons/allIcons';
import { updateTaskFroNServer } from '../slices/taskSlice';
import { useDispatch, useSelector } from 'react-redux';

const PopUp = ({_id}) => {
  

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {task}=useSelector((state)=>state.task)
    const dispatch=useDispatch()

    useEffect(()=>{
        task.map((e)=>{
            if(e._id===_id){
            
                setTitle(e.title)
                setDescription(e.description)
            }

            return e

            
    })




    },[task,_id])

    const onEdit=(e,close)=>{
        e.preventDefault()
        close()
        console.log("hiii")
        dispatch(updateTaskFroNServer({_id,title,description}))

    }

    return (
        <Popup 
            trigger={<button> {icon.edit}</button>} 
            modal
            contentStyle={{
                width: '400px', // Set the width of the popup
                padding: '20px',
                borderRadius: '8px',
                margin:"0 8px"
            }}
            overlayStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {close => (
                <div className='w-full'>
                    <button onClick={close} className="text-gray-500 absolute right-4 top-5  hover:text-gray-700 text-sm mb-4">{icon.cancel}</button>

                    <form action="#" className='flex gap-2 flex-col'>
                        <h1 className='font-semibold text-[20px]' >Update Task </h1>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Task title</label>
                            <input
                                type="text"
                                placeholder='Enter Task Title'
                                className='focus:outline-none px-2 py-2 border border-gray-300 rounded'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="description">Task description</label>
                            <input
                                type="text"
                                placeholder='Enter Task Description'
                                className='focus:outline-none px-2 py-2 border border-gray-300 rounded'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="btn text-end">
                            <input
                                type="submit"
                                value="Update"
                                className='bg-blue-400 px-2 py-1 w-fit rounded text-white'
                                onClick={(e)=>onEdit(e,close)} 
                            />
                        </div>
                    </form>
                </div>
            )}
        </Popup>
    )
}

export default PopUp;




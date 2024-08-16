import React, { useEffect } from 'react'
import icon from '../icons/allIcons'
import PopUp from './PopUp'

import { deleteTaskFroNServer, getTaskFroNServer } from '../slices/taskSlice'
import { useSelector, useDispatch } from 'react-redux'

const TaskList = () => {
    const {task} = useSelector((state) => state.task)
    const dispatch = useDispatch()

    const ondelete = (arr) => {
        dispatch(deleteTaskFroNServer(arr))
        // .unwrap()
        // .then(()=>{
        //     console.log("dd")
        //     // dispatch(deleteTask(arr))

        // }).catch((e)=>{
        //     console.log("not Deleted")
        // })

    }





    useEffect(() => {
        dispatch(getTaskFroNServer())
    }, [dispatch])


    return (



        <table className='w-full text-center mt-2 border border-gray-300'>
            <thead >
                <tr className='border-b border-gray-300'>
                    <th className='border-r border-gray-300'>No</th>
                    <th className='border-r border-gray-300'>Title</th>
                    <th className='border-r border-gray-300'>Description</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody className='mt-2 pt-2'>
                {task.map((e, i) => (
                   
                    <tr className='bg-gray-100 border-b border-gray-300' key={i}>
                         {console.log(e)}
                        <td className='border-r border-gray-300'>{i + 1}</td>
                        <td className='border-r border-gray-300'>{e.title}</td>
                        <td className='border-r border-gray-300'>{e.description}</td>
                        <td className='flex gap-2 justify-center items-center'>

                            <PopUp _id={e._id}  />
                            <button onClick={() => ondelete(e._id)}>{icon.delete}</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>

    )
}

export default TaskList
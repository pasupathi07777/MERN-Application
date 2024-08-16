const express=require('express')

const router=express.Router()
const  {createTask,getTask,singleTask,updateTask,deleteTask} = require( '../controller/taskController')

router.post('/',createTask)
router.get('/',getTask)
router.get('/:id',singleTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports=router
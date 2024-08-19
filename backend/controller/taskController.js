const { default: mongoose } = require('mongoose')
const taskModel=require('../model/TaskModel')


// to create task 
const createTask=async (req,res)=>{
    const {title,description}=req.body 
    try{

        const task=await taskModel.create({title,description})
        res.status(200).json(task)

    }catch(e){

        res.status(400).json({error:e.message})
    }
}


// to get all task 
const getTask=async (req,res)=>{
    try{
        const task=await taskModel.find()
        res.status(200).json(task)
    }catch(e){
        res.status(400).json({error:e.message})
    }
    
   
}

// to get single task 

const singleTask=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task Not Found "})
    }
    try{
        const singleTask=await taskModel.findById(id)
        res.status(200).json(singleTask)
    }catch(e){
        res.status(400).json({error:e.message})
    }
    
   
}

// update task

const updateTask=async (req,res)=>{
    const {id}=req.params
    const {title,description}=req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task Not Found "})
    }
    try{
        const updateTask=await taskModel.findByIdAndUpdate({_id:id},{title,description},{new:true})
        res.status(200).json(updateTask)
    }catch(e){
        res.status(400).json({error:e.message})
    }
    
   
}

// deleteTask

const deleteTask=async (req,res)=>{
    const {id}=req.params
   

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"Task Not Found "})
    }
    try{
        const deleteTask=await taskModel.findByIdAndDelete(id)
        res.status(200).json(deleteTask)
    }catch(e){
        res.status(400).json({error:e.message})
    }
    
   
}

module.exports={createTask,getTask,singleTask,updateTask,deleteTask}
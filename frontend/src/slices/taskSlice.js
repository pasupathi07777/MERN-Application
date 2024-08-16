import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
// import 'dotenv/config'

const initialState = {
    task: [],
    isLoading: false,
    error: ""
}

// const PORT="http://localhost:4000/api/tasks"
// const PORT="https://mern-application-zx99.onrender.com/api/tasks"
const PORT=`${process.env.BACKEND_URL}/api/tasks`

// get 

export const getTaskFroNServer = createAsyncThunk("tasks/getTaskFroNServer", async (_, { rejectWithValue }) => {
    try {
        const responce = await axios.get(PORT)
       
        return responce.data
    } catch (e) {
        return rejectWithValue({ error: "No Task Found" })

    }

})

// post 

export const postTaskFroNServer = createAsyncThunk("tasks/postTaskFroNServer", async (task, { rejectWithValue }) => {
    try {
        const responce = await axios.post(`${PORT}`,task)
        console.log(responce)
        return responce.data
    } catch (e) {
        return rejectWithValue({ error: " Task Not Added" })

    }

})

// update
export const updateTaskFroNServer = createAsyncThunk("tasks/updateTaskFroNServer", async (task, { rejectWithValue }) => {
   
    try {
        console.log(task.id)
      
        const responce = await axios.patch(`${PORT}/${task._id}`,task)
        console.log(responce)
        return responce.data
    } catch (e) {
        return rejectWithValue({ error: " Task Not Updated" })

    }

})

// delete
export const deleteTaskFroNServer = createAsyncThunk("tasks/deleteTaskFroNServer", async (task, { rejectWithValue }) => {
   
    try {
      
        const responce = await axios.delete(`${PORT}/${task}`)
        console.log(responce.data)
       
            return responce.data
    
    } catch (e) {
        return rejectWithValue({ error: " Task Not Deleted" })

    }

})



const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {

      
        deleteTask: (state, action) => {
            console.log("ggggggggg")
            state.task=state.task.filter((e)=>{
                return e.id!==action.payload.id
            })
            console.log(state.task)

        },

    },
    extraReducers:(builder)=>{
        builder.addCase(getTaskFroNServer.pending,(state)=>{
            state.isLoading=true

        }).addCase(getTaskFroNServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=""
       
            state.task=action.payload
        }).addCase(getTaskFroNServer.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
            console.log(action.payload)
           state.task=[]
        })
        .addCase(postTaskFroNServer.pending,(state)=>{
            state.isLoading=true

        }).addCase(postTaskFroNServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=""
       
            state.task.push(action.payload)
        }).addCase(postTaskFroNServer.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
            console.log(action.payload)
           state.task=[]
        })
        .addCase(updateTaskFroNServer.pending,(state)=>{
            state.isLoading=true

        }).addCase(updateTaskFroNServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=""
            console.log(action.payload._id)
            state.task=state.task.map((e)=>{
                if(e._id===action.payload._id){
                   e.title=action.payload.title
                   e.description=action.payload.description
                
                   
                }
                return e    
            })

         
       
        }).addCase(updateTaskFroNServer.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
            console.log(action.payload)
           state.task=[]
        })
        .addCase(deleteTaskFroNServer.pending,(state)=>{
            state.isLoading=true

        }).addCase(deleteTaskFroNServer.fulfilled,(state,action)=>{
            state.isLoading=false
            state.error=""
            console.log(action.payload.id)
            state.task=state.task.filter((e)=>{
                return e._id!==action.payload._id
            })
       
        }).addCase(deleteTaskFroNServer.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.payload
            console.log(action.payload)
           state.task=[]
        })
        
       

    }
 
    
   

    
})


export const { addTask, deleteTask } = taskSlice.actions
export default taskSlice.reducer












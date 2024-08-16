const mongoose=require('mongoose')
const schema=mongoose.Schema

const taskSchema=new schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true
    }
)


module.exports= mongoose.model("task",taskSchema)


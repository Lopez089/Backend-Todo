import {ITodo} from './../types/index'
import {model, Schema} from "mongoose"

const todoShema : Schema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        description:{
            type: String,
            required:true
        },
        status:{
            type:Boolean,
            required:true
        }

    }, {
        timestamps: true
    }
)

export default model<ITodo> ( 'Todo', todoShema)
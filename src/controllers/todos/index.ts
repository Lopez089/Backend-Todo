import {Response, Request} from 'express'
import {ITodo} from './../../types/index'
import Todo from '../../models/index'

// get

const getTodo = async (req: Request, res: Response): Promise<void> =>{
    try{
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({todos})
    }catch{(Error)
        throw Error
    }

}
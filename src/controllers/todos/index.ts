import {Response, Request} from 'express'
import {ITodo} from './../../types/index'
import Todo from '../../models/index'

// get

const getTodos = async (req: Request, res: Response): Promise<void> =>{
    try{
        const todos: ITodo[] = await Todo.find()
        res.status(200).json({todos})
    }catch{(Error)
        throw Error
    }

}

// add 

const addTodo = async (req:Request, res: Response): Promise<void> =>{
    try{
        const body = req.body as Pick<ITodo, "name" | "description" | 'status' | 'folder'>
        
        const todo: ITodo = new Todo({
            name: body.name,
            description: body.description,
            status: body.status,
            folder: body.folder
        })
        const newTodo : ITodo = await todo.save()
        const allTodos : ITodo[] = await Todo.find()
        res.status(201).json({
            mesage: 'Todo added',
            todo: newTodo,
            todos: allTodos
        })
    }catch (Error){
        throw Error
    }
}

// update

const updateTodo = async( req: Request, res: Response):Promise <void> =>{
    try{
        const {params: id, body }=req
        const updateTodo : ITodo | null = await Todo.findByIdAndUpdate({
            _id: id.id}, body)
        const allTodos : ITodo[] = await Todo.find()
        res.status(200).json({
            message: 'Todo update',
            todo: updateTodo,
            todos: allTodos
        })
    }catch(Error){
        throw Error
    }
}

// delate

const deleteTodo = async (req:Request, res:Response): Promise <void> =>{
    try{
        
        const delateTodo: ITodo| null = await Todo.findByIdAndRemove(req.params.id) 
        const allTodos : ITodo[] = await Todo.find()
        res.status(200).json({
            message: 'Todo deleted',
            todo: delateTodo, 
            todos: allTodos
        })
    }catch(Error){
        throw Error
    }
}

export {getTodos, addTodo, updateTodo, deleteTodo}
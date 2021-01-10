import {Router} from 'express'
import {getTodos, addTodo, updateTodo, deleteTodo, getFolderTodos, searchTodo} from './../controllers/todos/index'

const router: Router = Router()

router.get('/todos', getTodos)

router.get('/folder-todos', getFolderTodos)

router.get('/search-todo', searchTodo)

router.post('/add-todo', addTodo)

router.put('/edit-todo/:id', updateTodo)

router.delete('/delete-todo/:id', deleteTodo)

export default router
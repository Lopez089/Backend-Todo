"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../../models/index"));
// get
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield index_1.default.find();
        res.status(200).json({ todos });
    }
    catch (_a) {
        (Error);
        throw Error;
    }
});
exports.getTodos = getTodos;
// add 
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const todo = new index_1.default({
            name: body.name,
            description: body.description,
            status: body.status,
            folder: body.folder
        });
        const newTodo = yield todo.save();
        const allTodos = yield index_1.default.find();
        res.status(201).json({
            mesage: 'Todo added',
            todo: newTodo,
            todos: allTodos
        });
    }
    catch (Error) {
        throw Error;
    }
});
exports.addTodo = addTodo;
// update
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: id, body } = req;
        const updateTodo = yield index_1.default.findByIdAndUpdate({
            _id: id.id
        }, body);
        const allTodos = yield index_1.default.find();
        res.status(200).json({
            message: 'Todo update',
            todo: updateTodo,
            todos: allTodos
        });
    }
    catch (Error) {
        throw Error;
    }
});
exports.updateTodo = updateTodo;
// delate
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const delateTodo = yield index_1.default.findByIdAndRemove(req.params.id);
        const allTodos = yield index_1.default.find();
        res.status(200).json({
            message: 'Todo deleted',
            todo: delateTodo,
            todos: allTodos
        });
    }
    catch (Error) {
        throw Error;
    }
});
exports.deleteTodo = deleteTodo;
const getFolderTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paramsFolder = req.query.folder;
        const getFolderTodos = yield index_1.default.find({ folder: paramsFolder });
        res.status(200).json({
            message: `Todos folder ${paramsFolder}`,
            todos: getFolderTodos
        });
    }
    catch (Error) {
        throw Error;
    }
});
exports.getFolderTodos = getFolderTodos;
const searchTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paramsSearch = req.query.search;
        const searchTodos = yield index_1.default.find({ name: { $regex: `${paramsSearch}`, $options: "i" } });
        let searchArray = [];
        yield searchTodos.forEach(todo => {
            searchArray.push(todo.name);
        });
        res.status(200).json({
            message: `Search ${paramsSearch}`,
            search: searchArray
        });
    }
    catch (Error) {
        throw Error;
    }
});
exports.searchTodo = searchTodo;

import {createSlice} from '@reduxjs/toolkit'
import removeArrayItemByValue from "../../utils/removeArrayItemByValue.js";


const initialState = {
    collection: [],
    todo: [],
    done: [],
};

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const {todo} = action.payload;

            state.collection.push(todo);
            state.todo.push(todo.id);
        },
        setDone: (state, action) => {
            const {id} = action.payload;

            removeArrayItemByValue(state.todo, id);

            state.done.push(id);
        },
        setTodo: (state, action) => {
            const {id} = action.payload;

            removeArrayItemByValue(state.done, id);

            state.todo.push(id);
        },
    },
});

export const getTask = (id) => (state) => state.task.collection.find(task => task.id === id);

export const getTodo = (state) => state.task.todo;

export const getDone = (state) => state.task.done;


export const {addTodo, setDone, setTodo} = taskSlice.actions;

export default taskSlice.reducer;
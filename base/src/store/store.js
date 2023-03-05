import {configureStore} from '@reduxjs/toolkit'
import task from "./slices/task.js";


const store = configureStore({
    reducer: {
        task,
    },
});

export default store;

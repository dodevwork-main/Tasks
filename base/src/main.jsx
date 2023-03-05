// React
import ReactDOM from 'react-dom/client'
import {StrictMode} from "react";
// Redux
import {Provider} from "react-redux";
import store from "./store/store.js";
// Reset Styles
import CssBaseline from '@mui/material/CssBaseline';
// App Component
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <CssBaseline/>
            <App/>
        </Provider>
    </StrictMode>,
);

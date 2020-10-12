import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js'
import {Provider, ReactReduxContext} from "react-redux";
import {createStore, applyMiddleware,combineReducers} from "redux";
import {searchDataReducer, requestDataReducer} from "./reducers";
import {createLogger} from "redux-logger/src";
import thunkMiddleware from "redux-thunk"


const logger = createLogger()

const rootReducer = combineReducers({searchDataReducer, requestDataReducer})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

//react-redux is basically a connector component
//Provider component is used to wrap the store/state around the App component

ReactDOM.render(
    <React.StrictMode>
        <div>
            <Provider store={store}>
                <App />
            </Provider>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

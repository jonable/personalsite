import React from "react";
import ReactDOM from "react-dom";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/fontawesome-free/css/all.min.css";
import "./index.css";


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import * as reducers from './store/reducers';

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// store
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);

// store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));
registerServiceWorker();

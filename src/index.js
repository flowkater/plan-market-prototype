import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';
import rootSaga from "./sagas";

import 'bootstrap/dist/css/bootstrap.css';


const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middlewares = [sagaMiddleware];
    const store = createStore(        
        reducer,
        compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    
    sagaMiddleware.run(rootSaga);
    return store;
};

const rootEl = document.getElementById('root');
const Store = configureStore();


ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    rootEl);

registerServiceWorker();

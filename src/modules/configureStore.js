import { createStore, applyMiddleware, compose } from 'redux';

import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import getRecipe from './getRecipe';
import taskForm from './taskForm';
import createRecipe from "./createRecipe";
import alert from "./alert";

import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";

const reducer = combineReducers({
    getRecipe,
    taskForm,
    createRecipe,
    alert,
    router: routerReducer,
    form: formReducer
});;


const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();

const configureStore = (initialState) => {
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    const store = createStore(        
        reducer,
        initialState,
        compose(
            applyMiddleware(...middlewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
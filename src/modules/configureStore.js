import { createStore, applyMiddleware, compose } from 'redux';

import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

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
    form: formReducer
});;


const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState) => {
    const middlewares = [sagaMiddleware];
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
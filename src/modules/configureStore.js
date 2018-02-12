import { createStore, applyMiddleware, compose } from 'redux';

import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import planTemplate from './planTemplate';
import newTaskTemplateList from './newTaskTemplateList';
import newPlanTemplate from "./newPlanTemplate";
import alert from "./alert";


import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas"

const reducer = combineReducers({
    planTemplate,
    newTaskTemplateList,
    newPlanTemplate,
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
import { fromJS } from 'immutable';
import { createAction, handleActions } from "redux-actions";

import * as actionTypes from './actionTypes'

export const addNewTaskTemplate = createAction(actionTypes.ADD_NEW_TASK_TEMPLATE); // taskTemplate
export const editNewTaskTemplate = createAction(actionTypes.EDIT_NEW_TASK_TEMPLATE);  // taskTemplate, toggle
export const upNewTaskTemplate = createAction(actionTypes.UP_NEW_TASK_TEMPLATE); // index
export const downNewTaskTemplate = createAction(actionTypes.DOWN_NEW_TASK_TEMPLATE); // index
export const removeNewTaskTemplate = createAction(actionTypes.REMOVE_NEW_TASK_TEMPLATE); // index
export const toggleNewTaskTemplate = createAction(actionTypes.TOGGLE_NEW_TASK_TEMPLATE); // toggle

const newTaskTemplateInitialState = fromJS({
    taskTemplateList: [],
    taskTemplate: {},
    toggle: false
});

export default handleActions ({
    [actionTypes.ADD_NEW_TASK_TEMPLATE]: (state, action) => {
        const taskTemplateList = state.get('taskTemplateList');

        console.log(action.payload);
        console.log(taskTemplateList.toJS());

        return state.set('taskTemplateList', taskTemplateList.push(
            fromJS(action.payload)
        ))
    },
    [actionTypes.UP_NEW_TASK_TEMPLATE]: (state, action) => {
        const taskTemplateList = state.get('taskTemplateList').toJS();
        if(action.payload === 1) {
            console.log("top")
            return state;
        }
        const crrTask = taskTemplateList.find((taskTemplate) => taskTemplate.order === action.payload)
        const prevTask = taskTemplateList.find((taskTemplate) => taskTemplate.order === action.payload - 1)

        crrTask.order = crrTask.order - 1
        if(crrTask.monday_order){
            crrTask.monday_order = crrTask.order - 1
        }
        if(crrTask.tuesday_order){
            crrTask.tuesday_order = crrTask.order - 1
        }
        if(crrTask.wednesday_order){
            crrTask.wednesday_order = crrTask.order - 1
        }
        if(crrTask.thursday_order){
            crrTask.thursday_order = crrTask.order - 1
        }
        if(crrTask.friday_order){
            crrTask.friday_order = crrTask.order - 1
        }
        if(crrTask.saturday_order){
            crrTask.saturday_order = crrTask.order - 1
        }
        if(crrTask.sunday_order){
            crrTask.sunday_order = crrTask.order - 1
        }

        prevTask.order = prevTask.order + 1

        if(prevTask.monday_order){
            prevTask.monday_order = prevTask.order + 1
        }
        if(prevTask.tuesday_order){
            prevTask.tuesday_order = prevTask.order + 1
        }
        if(prevTask.wednesday_order){
            prevTask.wednesday_order = prevTask.order + 1
        }
        if(prevTask.thursday_order){
            prevTask.thursday_order = prevTask.order + 1
        }
        if(prevTask.friday_order){
            prevTask.friday_order = prevTask.order + 1
        }
        if(prevTask.saturday_order){
            prevTask.saturday_order = prevTask.order + 1
        }
        if(prevTask.sunday_order){
            prevTask.sunday_order = prevTask.order + 1
        }

        console.log('up');
        
        console.log(taskTemplateList);
        return state.set('taskTemplateList', fromJS(taskTemplateList));
    },
    [actionTypes.DOWN_NEW_TASK_TEMPLATE]: (state, action) => {
        const taskTemplateList = state.get('taskTemplateList').toJS();
        if(action.payload === taskTemplateList.length) {
            console.log("bottom")
            return state;
        }
        const crrTask = taskTemplateList.find((taskTemplate) => taskTemplate.order === action.payload)
        const nextTask = taskTemplateList.find((taskTemplate) => taskTemplate.order === action.payload + 1)
        console.log('down')

        crrTask.order = crrTask.order + 1

        if(crrTask.monday_order){
            crrTask.monday_order = crrTask.order + 1
        }
        if(crrTask.tuesday_order){
            crrTask.tuesday_order = crrTask.order + 1
        }
        if(crrTask.wednesday_order){
            crrTask.wednesday_order = crrTask.order + 1
        }
        if(crrTask.thursday_order){
            crrTask.thursday_order = crrTask.order + 1
        }
        if(crrTask.friday_order){
            crrTask.friday_order = crrTask.order + 1
        }
        if(crrTask.saturday_order){
            crrTask.saturday_order = crrTask.order + 1
        }
        if(crrTask.sunday_order){
            crrTask.sunday_order = crrTask.order + 1
        }


        nextTask.order = nextTask.order - 1

        if(nextTask.monday_order){
            nextTask.monday_order = nextTask.order - 1
        }
        if(nextTask.tuesday_order){
            nextTask.tuesday_order = nextTask.order - 1
        }
        if(nextTask.wednesday_order){
            nextTask.wednesday_order = nextTask.order - 1
        }
        if(nextTask.thursday_order){
            nextTask.thursday_order = nextTask.order - 1
        }
        if(nextTask.friday_order){
            nextTask.friday_order = nextTask.order - 1
        }
        if(nextTask.saturday_order){
            nextTask.saturday_order = nextTask.order - 1
        }
        if(nextTask.sunday_order){
            nextTask.sunday_order = nextTask.order - 1
        }

        console.log(taskTemplateList);
        return state.set('taskTemplateList', fromJS(taskTemplateList));
    },
    [actionTypes.REMOVE_NEW_TASK_TEMPLATE]: (state, action) => state,
    [actionTypes.TOGGLE_NEW_TASK_TEMPLATE]: (state, action) => {
        return state.set('toggle', action.payload);
    }
}, newTaskTemplateInitialState);
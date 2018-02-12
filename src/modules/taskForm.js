import { Map, fromJS } from 'immutable';
import { createAction, handleActions } from "redux-actions";

const ADD_NEW_TASK = "taskForm/ADD_NEW_TASK";
const ON_ADD_NEW_TASK = "taskForm/ON_ADD_NEW_TASK";
const EDIT_NEW_TASK = "taskForm/EDIT_NEW_TASK";
const UPDATE_NEW_TASK = "taskForm/UPDATE_NEW_TASK";
const UP_NEW_TASK = "taskForm/UP_NEW_TASK";
const DOWN_NEW_TASK = "taskForm/DOWN_NEW_TASK";
const REMOVE_NEW_TASK = "taskForm/REMOVE_NEW_TASK";
const TOGGLE_NEW_TASK = "taskForm/TOGGLE_NEW_TASK";


export const addNewTask = createAction(ADD_NEW_TASK); // task
export const onAddNewTask = createAction(ON_ADD_NEW_TASK); // task
export const editNewTask = createAction(EDIT_NEW_TASK);  // task, toggle
export const updateNewTask = createAction(UPDATE_NEW_TASK); 
export const upNewTask = createAction(UP_NEW_TASK); // index
export const downNewTask = createAction(DOWN_NEW_TASK); // index
export const removeNewTask = createAction(REMOVE_NEW_TASK); // index
export const toggleNewTask = createAction(TOGGLE_NEW_TASK); // toggle

const initialState = fromJS({
    taskList: [],
    taskItem: {},
    toggle: false,
    formType: 'NEW',
    index: -1,
    data: {}
});

export default handleActions ({
    [ADD_NEW_TASK]: (state, action) => {
        const taskList = state.get('taskList');

        console.log(action.payload);
        console.log(taskList.toJS());

        return state.set('taskList', taskList.push(
            fromJS(action.payload)
        ))
    },
    [ON_ADD_NEW_TASK]: (state, action) => {
        return state.set('formType', 'NEW')
    },
    [EDIT_NEW_TASK]: (state, action) => {
        return state.set('taskItem', Map(action.payload.taskItem))
                    .set('index', action.payload.index)
                    .set('formType', 'EDIT')
    },
    [UPDATE_NEW_TASK]: (state, action) => {
        const taskList = state.get('taskList');

        return state.set('taskList', taskList.set(action.payload.index, action.payload.taskItem))
    },
    [UP_NEW_TASK]: (state, action) => {
        const taskList = state.get('taskList').toJS();
        if(action.payload === 1) {
            console.log("top")
            return state;
        }
        const crrTask = taskList.find((task) => task.order === action.payload)
        const prevTask = taskList.find((task) => task.order === action.payload - 1)

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
        
        console.log(taskList);
        return state.set('taskList', fromJS(taskList));
    },
    [DOWN_NEW_TASK]: (state, action) => {
        const taskList = state.get('taskList').toJS();
        if(action.payload === taskList.length) {
            console.log("bottom")
            return state;
        }
        const crrTask = taskList.find((task) => task.order === action.payload)
        const nextTask = taskList.find((task) => task.order === action.payload + 1)
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

        console.log(taskList);
        return state.set('taskList', fromJS(taskList));
    },
    [REMOVE_NEW_TASK]: (state, action) => {
        const taskList = state.get('taskList')

        return state.set('taskList', taskList.delete(action.payload))
    },
    [TOGGLE_NEW_TASK]: (state, action) => {
        return state.set('toggle', action.payload);
    }
}, initialState);
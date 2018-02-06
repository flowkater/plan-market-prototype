import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import planTemplate from './planTemplate';
import newTaskTemplateList from './newTaskTemplateList';
import newPlanTemplate from "./newPlanTemplate";
import alert from "./alert";

export default combineReducers({
    planTemplate,
    newTaskTemplateList,
    newPlanTemplate,
    alert,
    form: formReducer
});
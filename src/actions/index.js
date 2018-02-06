import { createAction } from 'redux-actions';

import * as ActionTypes from "./ActionTypes";

export const requestGetPlanTemplateList = createAction(ActionTypes.REQUEST_GET_PLAN_TEMPLATE_LIST);
export const requestGetPlanTemplateListSuccess = createAction(ActionTypes.REQUEST_GET_PLAN_TEMPLATE_LIST_SUCCESS);
export const requestGetPlanTemplateListFailure = createAction(ActionTypes.REQUEST_GET_PLAN_TEMPLATE_LIST_FAILURE);

export const requestGetPlanTemplate = createAction(ActionTypes.REQUEST_GET_PLAN_TEMPLATE);
export const requestGetPlanTemplateSuccess = createAction(ActionTypes.REQUEST_GET_PLAN_TEMPLATE_SUCCESS);
export const requestGetPlanTemplateFailure = createAction(ActionTypes.REQUEST_GET_PLAN_TEMPLATE_FAILURE);

export const requestCreatePlanTemplate = createAction(ActionTypes.REQUEST_CREATE_PLAN_TEMPLATE);
export const requestCreatePlanTemplateSuccess = createAction(ActionTypes.REQUEST_CREATE_PLAN_TEMPLATE_SUCCESS);
export const requestCreatePlanTemplateFailure = createAction(ActionTypes.REQUEST_CREATE_PLAN_TEMPLATE_FAILURE);

export const requestUpdatePlanTemplate = createAction(ActionTypes.REQUEST_UPDATE_PLAN_TEMPLATE);
export const requestUpdatePlanTemplateSuccess = createAction(ActionTypes.REQUEST_UPDATE_PLAN_TEMPLATE_SUCCESS);
export const requestUpdatePlanTemplateFailure = createAction(ActionTypes.REQUEST_UPDATE_PLAN_TEMPLATE_FAILURE);

export const requestDeletePlanTemplate = createAction(ActionTypes.REQUEST_DELETE_PLAN_TEMPLATE);
export const requestDeletePlanTemplateSuccess = createAction(ActionTypes.REQUEST_DELETE_PLAN_TEMPLATE_SUCCESS);
export const requestDeletePlanTemplateFailure = createAction(ActionTypes.REQUEST_DELETE_PLAN_TEMPLATE_FAILURE);

export const requestGetTaskTemplate = createAction(ActionTypes.REQUEST_GET_TASK_TEMPLATE);
export const requestGetTaskTemplateSuccess = createAction(ActionTypes.REQUEST_GET_TASK_TEMPLATE_SUCCESS);
export const requestGetTaskTemplateFailure = createAction(ActionTypes.REQUEST_GET_TASK_TEMPLATE_FAILURE);

export const requestCreateTaskTemplate = createAction(ActionTypes.REQUEST_CREATE_TASK_TEMPLATE);
export const requestCreateTaskTemplateSuccess = createAction(ActionTypes.REQUEST_CREATE_TASK_TEMPLATE_SUCCESS);
export const requestCreateTaskTemplateFailure = createAction(ActionTypes.REQUEST_CREATE_TASK_TEMPLATE_FAILURE);

export const requestUpdateTaskTemplate = createAction(ActionTypes.REQUEST_UPDATE_TASK_TEMPLATE);
export const requestUpdateTaskTemplateSuccess = createAction(ActionTypes.REQUEST_UPDATE_TASK_TEMPLATE_SUCCESS);
export const requestUpdateTaskTemplateFailure = createAction(ActionTypes.REQUEST_UPDATE_TASK_TEMPLATE_FAILURE);

export const requestDeleteTaskTemplate = createAction(ActionTypes.REQUEST_DELETE_TASK_TEMPLATE);
export const requestDeleteTaskTemplateSuccess = createAction(ActionTypes.REQUEST_DELETE_TASK_TEMPLATE_SUCCESS);
export const requestDeleteTaskTemplateFailure = createAction(ActionTypes.REQUEST_DELETE_TASK_TEMPLATE_FAILURE);

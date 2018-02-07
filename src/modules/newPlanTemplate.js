import { fromJS } from 'immutable';
import { createAction, handleActions } from "redux-actions";

import * as actionTypes from './actionTypes'

export const requestPostPlanTemplate = createAction(actionTypes.REQUEST_POST_PLAN_TEMPLATE);
export const successPostPlanTemplate = createAction(actionTypes.SUCCESS_POST_PLAN_TEMPLATE);
export const failurePostPlanTemplate = createAction(actionTypes.FAILURE_POST_PLAN_TEMPLATE);

const newPlanTemplateInitialState = fromJS({
    status: "INIT",
    planTemplate: {

    }
});

export default handleActions({
    [actionTypes.REQUEST_POST_PLAN_TEMPLATE]: (state, action) => {
        console.log("request")
        return state.set('status', "WAITING");
    },
    [actionTypes.SUCCESS_POST_PLAN_TEMPLATE]: (state, action) => {
        return state.set('status', "SUCCESS");
    },
    [actionTypes.FAILURE_POST_PLAN_TEMPLATE]: (state, action) => {
        return state.set('status', "FAILURE")
    },
}, newPlanTemplateInitialState)

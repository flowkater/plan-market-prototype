import { takeLatest, call, put } from "redux-saga/effects";

import * as ActionCreators from "../actions";
import * as ActionTypes from "../actions/ActionTypes";
import { api } from "../services";

function* getPlanTemplateList(action) {
    try {
        const response = yield call(api.getPlanTemplateList)
        if (response.data.plan_templates) {
            const payload = {
                planTemplateList: response.data.plan_templates // TODO: JSON 네이밍을 Camel Case로 수정해야함
            };
            yield put(ActionCreators.requestGetPlanTemplateListSuccess(payload));
        }
    } catch (error) {
        console.log(error);
        yield put(ActionCreators.requestGetPlanTemplateListFailure({error}));
    }
}

function* getPlanTemplate(action) {
    try {
        const response = yield call(api.getPlanTemplate, action.payload.planTemplateId)
        if (response.data.plan_template) {
            const payload = {
                planTemplate: response.data.plan_template // TODO: JSON 네이밍을 Camel Case로 수정해야함
            };
            yield put(ActionCreators.requestGetPlanTemplateSuccess(payload));
        }
    } catch (error) {
        console.log(error);
        yield put(ActionCreators.requestGetPlanTemplateFailure({error}));
    }
}

export function* watcher() {
    yield takeLatest(ActionTypes.REQUEST_GET_PLAN_TEMPLATE_LIST, getPlanTemplateList);
    yield takeLatest(ActionTypes.REQUEST_GET_PLAN_TEMPLATE, getPlanTemplate);
}

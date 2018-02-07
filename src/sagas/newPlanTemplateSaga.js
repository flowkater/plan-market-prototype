import { takeLatest, call, put, select } from 'redux-saga/effects'
import * as actionTypes from '../modules/actionTypes'
import * as newPlanTemplateActions from '../modules/newPlanTemplate'
import * as alertActions from "../modules/alert";
import { formValueSelector } from 'redux-form/immutable';

import * as api from "../services/api";

function* postPlanTemplateSaga(action) {
    try {
        const state = yield select();

        const selector = yield formValueSelector('planTemplate');
        const taskTemplateList = state.newTaskTemplateList.get('taskTemplateList')

        const data = {
            plan_template: {
                name: selector(state, 'name'),
                description: selector(state, 'description'),
                conditions: [
                    {
                        name: "level",
                        value_type: "string",
                        string_value: selector(state, 'level')
                    },
                    {
                        name: "term",
                        value_type: "int",
                        int_value: selector(state, 'term')
                    },
                    {
                        name: "due",
                        value_type: "int",
                        int_value: selector(state, 'due')
                    },
                    {
                        name: "repeat",
                        value_type: "int",
                        int_value: selector(state, 'repeat')
                    },
                ],
                task_templates: taskTemplateList.toJS()
            }
        }
        
        console.log(data);

        const payload = yield call(api.createPlanTemplate, data);

        if(payload.data.plan_template) {
            yield put(newPlanTemplateActions.successPostPlanTemplate())
        }
    } catch (e) {
        yield put(newPlanTemplateActions.failurePostPlanTemplate())
        console.log(e);
    }
}

function* successAlertStatusSaga(action) {
    yield put(alertActions.setAlert("SUCCESS"))
}

function* failureAlertStatusSaga(action) {
    yield put(alertActions.setAlert("FAILURE"))
}

export function* watchNewPlanTemplate() {
    yield takeLatest( actionTypes.REQUEST_POST_PLAN_TEMPLATE, postPlanTemplateSaga );
    yield takeLatest( actionTypes.SUCCESS_POST_PLAN_TEMPLATE, successAlertStatusSaga );
    yield takeLatest( actionTypes.FAILURE_POST_PLAN_TEMPLATE, failureAlertStatusSaga );
}
import { Map } from 'immutable';
import { createAction, handleActions } from "redux-actions";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import { formValueSelector } from "redux-form/immutable";

import * as api from "helpers/api";

const NO_AUTH = "auth/NO_AUTH";
const SET_USER = "auth/SET_USER";
const WAITING_AUTH = "auth/WAITING_AUTH";
const CHECK_LOGIN_STATUS = "auth/CHECK_LOGIN_STATUS";

const REQUEST_VALIDATE_TOKEN = "auth/REQUEST_VALIDATE_TOKEN";
const SUCCESS_VALIDATE_TOKEN = "auth/SUCCESS_VALIDATE_TOKEN_SUCCESS";
const FAILURE_VALIDATE_TOKEN = "auth/FAILURE_VALIDATE_TOKEN";

const REQUEST_LOGIN = 'user/REQUEST_LOGIN';
const SUCCESS_LOGIN = 'user/SUCCESS_LOGIN';
const FAILURE_LOGIN = 'user/FAILURE_LOGIN';

const REQUEST_REGISTER = 'user/REQUEST_REGISTER';
const SUCCESS_REGISTER = 'user/SUCCESS_REGISTER';
const FAILURE_REGISTER = 'user/FAILURE_REGISTER';

export const requestLogin = createAction(REQUEST_LOGIN)
export const successLogin = createAction(SUCCESS_LOGIN)
export const failureLogin = createAction(FAILURE_LOGIN)
  
export const requestRegister = createAction(REQUEST_REGISTER)
export const successRegister = createAction(SUCCESS_REGISTER)
export const failureRegister = createAction(FAILURE_REGISTER)

export const noAuth = createAction(NO_AUTH);
export const setUser = createAction(SET_USER);
export const waitingAuth = createAction(WAITING_AUTH);
export const checkLoginStatus = createAction(CHECK_LOGIN_STATUS);

export const requestValidateToken = createAction(REQUEST_VALIDATE_TOKEN);
export const successValidateToken = createAction(SUCCESS_VALIDATE_TOKEN);
export const failureValidateToken = createAction(FAILURE_VALIDATE_TOKEN);


const initialState = Map({
    status: 'INIT',
    registerStatus: 'INIT',
    loginStatus: 'INIT',
    user: Map({
        userId: null,
        username: null,
        token: null,
    })
})

export default handleActions (
    {
        [REQUEST_REGISTER]: (state, action) => {
            return state.set('registerStatus', 'WAITING')
        },
        [SUCCESS_REGISTER]: (state, action) => {
            return state.set('registerStatus', 'SUCCESS')
        },
        [FAILURE_REGISTER]: (state, action) => {
            return state.set('registerStatus', 'FAILURE')
        },
        [WAITING_AUTH]: (state, action) => {
            return state.set('status', 'WAITING');
        }, 
        [NO_AUTH]: (state, action) => {
            return state
                .set('user', null)
                .set('status', 'INIT')
        },
        [SET_USER]: (state, action) => {
            const { payload: user } = action
            return state.set('user', user)
        },
        [SUCCESS_VALIDATE_TOKEN]: (state, action) => {
            return state.set('status', 'SUCCESS')
        },
        [SUCCESS_LOGIN]: (state, action) => {
            return state
                .set('status', 'SUCCESS')
        }
    },
    initialState
);

function* postRegisterSaga(action) {
    try {
        const state = yield select();
        const selector = yield formValueSelector('register');
        const data = {
            email: selector(state, "email"),
            username: selector(state, "username"),
            password: selector(state, "password")
        }

        const response = yield call(api.postRegister, data);
        if (response.status === 201) {
            yield put(successRegister())
        }

    } catch (error) {
        console.log(error);
        yield put(failureRegister({error}));
    }
}

function* redirectToLoginSaga(aciton) {
    console.log("redirectToLogin")
    yield put(push('/login'));
}

function* checkLoginStatusSaga(action) {
    console.log("checkLoginStatusSaga");
    yield put(requestValidateToken())
}

function* requestValidateTokenSaga(action) {
    console.log("requestValidateTokenSaga")
}

function* successValidateTokenSaga(action) {
    console.log("successValidateTokenSaga")
}

function* failureValidateTokenSaga(action) {
    console.log("failureValidateTokenSaga")
}

export function* watchAuth() {
    yield takeLatest(NO_AUTH, redirectToLoginSaga);
    yield takeLatest(CHECK_LOGIN_STATUS, checkLoginStatusSaga);
    yield takeLatest(REQUEST_VALIDATE_TOKEN, requestValidateTokenSaga);
    yield takeLatest(SUCCESS_VALIDATE_TOKEN, successValidateTokenSaga);
    yield takeLatest(FAILURE_VALIDATE_TOKEN, failureValidateTokenSaga);

    yield takeLatest(REQUEST_REGISTER, postRegisterSaga);
    yield takeLatest(SUCCESS_REGISTER, redirectToLoginSaga);
}
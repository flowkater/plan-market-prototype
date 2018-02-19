import { Map } from 'immutable';
import { createAction, handleActions } from "redux-actions";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import { formValueSelector } from "redux-form/immutable";

import * as api from "helpers/api";
import storage from 'helpers/storage';

const NO_AUTH = "auth/NO_AUTH";
const SET_USER = "auth/SET_USER";
const WAITING_AUTH = "auth/WAITING_AUTH";
const CHECK_LOGIN_STATUS = "auth/CHECK_LOGIN_STATUS";
const REDIRECT_ROOT = "auth/REDIRECT_ROOT"

const REQUEST_VALIDATE_TOKEN = "auth/REQUEST_VALIDATE_TOKEN";
const SUCCESS_VALIDATE_TOKEN = "auth/SUCCESS_VALIDATE_TOKEN_SUCCESS";
const FAILURE_VALIDATE_TOKEN = "auth/FAILURE_VALIDATE_TOKEN";

const REQUEST_LOGIN = 'auth/REQUEST_LOGIN';
const SUCCESS_LOGIN = 'auth/SUCCESS_LOGIN';
const FAILURE_LOGIN = 'auth/FAILURE_LOGIN';

const REQUEST_REGISTER = 'auth/REQUEST_REGISTER';
const SUCCESS_REGISTER = 'auth/SUCCESS_REGISTER';
const FAILURE_REGISTER = 'auth/FAILURE_REGISTER';

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
export const redirectRoot = createAction(REDIRECT_ROOT);

export const requestValidateToken = createAction(REQUEST_VALIDATE_TOKEN);
export const successValidateToken = createAction(SUCCESS_VALIDATE_TOKEN);
export const failureValidateToken = createAction(FAILURE_VALIDATE_TOKEN);


const initialState = Map({
    status: 'INIT',
    registerStatus: 'INIT',
    loginStatus: 'INIT',
    user: Map({
        id: null,
        username: null,
        email: null,
        access_token: null,
    }),
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
        [REQUEST_LOGIN]: (state, action) => {
            return state.set('loginStatus', 'WAITING')
        },
        [SUCCESS_LOGIN]: (state, action) => {
            return state
                .set('loginStatus', 'SUCCESS')
                .set('user', Map(action.payload.user))
        },
        [FAILURE_LOGIN]: (state, action) => {
            return state.set('loginStatus', 'FAILURE')
        },
        [WAITING_AUTH]: (state, action) => {
            return state.set('status', 'WAITING');
        }, 
        [NO_AUTH]: (state, action) => {
            return state
                .set('user', Map({
                    userId: null,
                    username: null,
                    email: null,
                    access_token: null,
                }))
                .set('status', 'INIT')
        },
        [SET_USER]: (state, action) => {
            const { payload: user } = action
            return state.set('user', Map(user))
        },
        [REQUEST_VALIDATE_TOKEN]: (state, action) => state,
        [SUCCESS_VALIDATE_TOKEN]: (state, action) => {
            return state
                .set('status', 'SUCCESS')
                .set('user', Map(action.payload.user))
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
        console.log(response);
        if (response.status === 201) {
            yield put(successRegister())
        }

    } catch (error) {
        console.log(error);
        yield put(failureRegister({error}));
    }
}

function* postLoginSaga(action) {
    try {
        const state = yield select();
        const selector = yield formValueSelector('login');
        const data = {
            email: selector(state, "email"),
            password: selector(state, "password")
        }

        const response = yield call(api.postLogin, data);
        if (response.status === 200) {
            yield put(successLogin({user: response.data.user}))
        }
    } catch (error) {
        console.log(error);
        yield put(failureLogin({error}));
    }
}

function* successLoginSaga(action) {
    storage.set('__PRTD_USER__', action.payload.user);
    yield put(push('/'));
}

function* redirectToLoginSaga(aciton) {
    console.log("redirectToLogin")
    
    storage.remove('__PRTD_USER__');
    yield put(push('/login'));
}

function* redirectToRootSaga(action) {
    console.log("redirectToLogin")
    yield put(push('/'));
}

function* checkLoginStatusSaga(action) {
    console.log("checkLoginStatusSaga");
    
    yield put(requestValidateToken());
}

function* requestValidateTokenSaga(action) {
    const state = yield select();
    const user = state.auth.get('user').toJS()
    
    console.log(user, "requestValidateTokenSaga")
    if(!user.access_token) {
        yield put(failureValidateToken());
    }

    try {
        const response = yield call(api.postValidate, {access_token: user.access_token})
        if(response.status === 200) {
            yield put(successValidateToken({user: response.data.user}));
        }
        
    } catch (error) {
        console.log(error);
        yield put(failureValidateToken());
    }
}

// function* successValidateTokenSaga(action) {
    
// }

function* failureValidateTokenSaga(action) {
    yield put(noAuth());
}

export function* watchAuth() {
    yield takeLatest(NO_AUTH, redirectToLoginSaga);
    yield takeLatest(CHECK_LOGIN_STATUS, checkLoginStatusSaga);
    yield takeLatest(REQUEST_VALIDATE_TOKEN, requestValidateTokenSaga);
    // yield takeLatest(SUCCESS_VALIDATE_TOKEN, successValidateTokenSaga);
    yield takeLatest(FAILURE_VALIDATE_TOKEN, failureValidateTokenSaga);

    yield takeLatest(REQUEST_REGISTER, postRegisterSaga);
    yield takeLatest(SUCCESS_REGISTER, redirectToLoginSaga);

    yield takeLatest(REQUEST_LOGIN, postLoginSaga);
    yield takeLatest(SUCCESS_LOGIN, successLoginSaga);

    yield takeLatest(REDIRECT_ROOT, redirectToRootSaga)
}
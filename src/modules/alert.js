import { fromJS } from 'immutable';
import { createAction, handleActions } from "redux-actions";
import * as actionTypes from './actionTypes'

export const setAlert = createAction(actionTypes.SET_ALERT);

const alertInitialState = fromJS({
    status: 'NOTHING'
});

export default handleActions({
    [actionTypes.SET_ALERT]: (state, action) => {
        return state.set('status', action.payload)
    }
}, alertInitialState)
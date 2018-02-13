import { fromJS } from 'immutable';
import { createAction, handleActions } from "redux-actions";

const SET_ALERT = "SET_ALERT";

export const setAlert = createAction(SET_ALERT);

const alertInitialState = fromJS({
    status: 'NOTHING'
});

export default handleActions({
    [SET_ALERT]: (state, action) => {
        return state.set('status', action.payload)
    }
}, alertInitialState)
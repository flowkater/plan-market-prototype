import { fromJS } from 'immutable';
import { handleActions } from "redux-actions";

import * as ActionTypes from "../actions/ActionTypes";

const initialState = fromJS({
    status: 'INIT',
    planTemplateList: [],
    planTemplate: null
});

// export default function (state = planTemplateInitialState, action = {}) {
//     switch (action.type) {
//         default:
//         return state;
//     }
// }

export default handleActions(
    {
        [ActionTypes.REQUEST_GET_PLAN_TEMPLATE_LIST_SUCCESS]: (state, action) => state.set("planTemplateList", fromJS(action.payload.planTemplateList))
    },
    initialState
);

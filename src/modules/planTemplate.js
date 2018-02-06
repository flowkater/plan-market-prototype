import { fromJS } from 'immutable';

const planTemplateInitialState = fromJS({
    status: 'INIT',
});

export default function (state = planTemplateInitialState, action = {}) {

    switch (action.type) {
        default:
        return state;
    }
}
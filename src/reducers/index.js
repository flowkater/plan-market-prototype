import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';

import planTemplate from './planTemplate';

export default combineReducers({
    planTemplate,
    form: formReducer
});
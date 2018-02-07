import { all, fork } from 'redux-saga/effects';
import { watchNewPlanTemplate } from './newPlanTemplateSaga';

import * as api from "./api";

export default function* rootSaga() {
    yield all([
        fork(api.watcher),
        fork(watchNewPlanTemplate)
    ]);
}
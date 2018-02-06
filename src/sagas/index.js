import { all, fork } from 'redux-saga/effects';
import { watchNewPlanTemplate } from './newPlanTemplateSaga';

export default function* rootSaga() {
    yield all([
        fork(watchNewPlanTemplate),
    ]);
}
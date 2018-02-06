import { all, fork } from 'redux-saga/effects';

import * as api from "./api";

export default function* rootSaga() {
    yield all([
        fork(api.watcher),
    ]);
}
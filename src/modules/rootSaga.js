import { all, fork } from 'redux-saga/effects';
import { watchGetRecipe } from "./getRecipe";
import { watchCreateRecipe } from './createRecipe';
import { watchAuth } from './auth';


export default function* rootSaga() {
    yield all([
        fork(watchGetRecipe),
        fork(watchCreateRecipe),
        fork(watchAuth)
    ]);
}
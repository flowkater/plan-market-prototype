import { Map } from "immutable";
import { createAction, handleActions } from "redux-actions";

import { takeLatest, call, put, select } from "redux-saga/effects";
import { formValueSelector } from "redux-form/immutable";

import * as api from "helpers/api";

import * as alertActions from "./alert";
import * as taskFormActions from "./taskForm";

import { push } from "react-router-redux";

const REQUEST_POST_RECIPE = "createRecipe/REQUEST_POST_RECIPE";
const SUCCESS_POST_RECIPE = "createRecipe/SUCCESS_POST_RECIPE";
const FAILURE_POST_RECIPE = "createRecipe/FAILURE_POST_RECIPE";

export const requestPostRecipe = createAction(REQUEST_POST_RECIPE);
export const successPostRecipe = createAction(SUCCESS_POST_RECIPE);
export const failurePostRecipe = createAction(FAILURE_POST_RECIPE);

const initialState = Map({
    status: "INIT",
    recipe: Map({

    }),
    recipeId: -1
});

export default handleActions(
    {
        [REQUEST_POST_RECIPE]: (state, action) => {
            return state.set("status", "WAITING");
        },
        [REQUEST_POST_RECIPE]: (state, action) => {
            return state
                .set("recipeId", action.payload.recipeId)
                .set("status", "SUCCESS");
        },
        [REQUEST_POST_RECIPE]: (state, action) => {
            return state.set("status", "FAILURE");
        }
    },
    initialState
);


// saga
function* postRecipeSaga(action) {
    try {
        const state = yield select();
        const selector = yield formValueSelector("recipe");
        const taskList = state.taskForm.get(
            "taskList"
        );
        
        // FIXME: 임시 데이터 삽입
        const data = {
            recipe: {
                name: selector(state, "name"),
                description: selector(state, "description"),
                summary: "",
                term: selector(state, "term"),
                remain_days_to_goal: selector(state, "due"),
                repeat: [].length,
                repetitions: [],
                category_ids: [],
                level_ids: [],
                material_ids: []
            }
        };

        console.log(data);
        const payload = yield call(api.createRecipe, data);

        if (payload.data.recipe) {
            yield put(
                successPostRecipe({
                    recipeId: payload.data.recipe.id
                })
            );
        }
    } catch (e) {
        yield put(failurePostRecipe());
        console.log(e);
    }
}

function* successPostRecipeSaga(action) {
    console.log(`/recipes/${action.payload.recipeId}`);
    yield put(alertActions.setAlert("SUCCESS"));
    yield put(push(`/recipes/${action.payload.recipeId}`));
    yield put(taskFormActions.clearTaskList());
}

function* failurePostRecipeSaga(action) {
    yield put(alertActions.setAlert("FAILURE"));
}

export function* watchCreateRecipe() {
    yield takeLatest(
        REQUEST_POST_RECIPE,
        postRecipeSaga
    );
    yield takeLatest(
        SUCCESS_POST_RECIPE,
        successPostRecipeSaga
    );
    yield takeLatest(
        FAILURE_POST_RECIPE,
        failurePostRecipeSaga
    );
}

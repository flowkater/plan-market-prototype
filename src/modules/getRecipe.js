import { fromJS } from 'immutable';
import { createAction, handleActions } from "redux-actions";

import { takeLatest, call, put } from "redux-saga/effects";

import * as api from "helpers/api";

const initialState = fromJS({
    indexStatus: 'INIT',
    showStatus: 'INIT',
    recipeList: [],
    recipe: {}
});

const REQUEST_GET_RECIPE_LIST = "getRecipe/REQUEST_GET_RECIPE_LIST";
const SUCCESS_GET_RECIPE_LIST = "getRecipe/SUCCESS_GET_RECIPE_LIST";
const FAILURE_GET_RECIPE_LIST = "getRecipe/FAILURE_GET_RECIPE_LIST";

const REQUEST_GET_RECIPE = "getRecipe/REQUEST_GET_RECIPE";
const SUCCESS_GET_RECIPE = "getRecipe/SUCCESS_GET_RECIPE";
const FAILURE_GET_RECIPE = "getRecipe/FAILURE_GET_RECIPE";

const SET_RECIPE_TO_NULL = "getRecipe/SET_RECIPE_TO_NULL";

export const requestGetRecipeList = createAction(REQUEST_GET_RECIPE_LIST);
export const successGetRecipeList = createAction(SUCCESS_GET_RECIPE_LIST);
export const failureGetRecipeList = createAction(FAILURE_GET_RECIPE_LIST);

export const requestGetRecipe = createAction(REQUEST_GET_RECIPE);
export const successGetRecipe = createAction(SUCCESS_GET_RECIPE);
export const failureGetRecipe = createAction(FAILURE_GET_RECIPE);

export const setRecipeToNull = createAction(SET_RECIPE_TO_NULL);


export default handleActions(
    {
        [REQUEST_GET_RECIPE_LIST]: (state, action) => {
            return state.set("indexStatus", "WAITING");
        },
        [SUCCESS_GET_RECIPE_LIST]: (state, action) => {
            return state
                .set("indexStatus", "SUCCESS")
                .set("recipeList", fromJS(action.payload.RecipeList));
        },
        [FAILURE_GET_RECIPE_LIST]: (state, action) => {
            return state.set("indexStatus", "FAILURE");
        },
        [REQUEST_GET_RECIPE]: (state, action) => {
            return state.set("showStatus", "WAITING");
        },
        [SUCCESS_GET_RECIPE]: (state, action) => {
            return state
                .set("showStatus", "SUCCESS")
                .set("recipe", fromJS(action.payload.Recipe));
        },
        [FAILURE_GET_RECIPE]: (state, action) => {
            return state.set("showStatus", "FAILURE");
        },
        [SET_RECIPE_TO_NULL]: (state, action) => {
            return state.set("recipe", null)
        },
    },
    initialState
);


function* getRecipeListSaga(action) {
    try {
        const response = yield call(api.getRecipeList)
        if (response.data.recipes) {
            const payload = {
                RecipeList: response.data.recipes 
            };
            yield put(successGetRecipeList(payload));
        }
    } catch (error) {
        console.log(error);
        yield put(failureGetRecipeList({error}));
    }
}

function* getRecipeSaga(action) {
    try {
        const response = yield call(api.getRecipe, action.payload.recipeId)
        if (response.data.recipe) {
            const payload = {
                Recipe: response.data.recipe // TODO: JSON 네이밍을 Camel Case로 수정해야함
            };
            yield put(successGetRecipe(payload));
        }
    } catch (error) {
        console.log(error);
        yield put(failureGetRecipe({error}));
    }
}

export function* watchGetRecipe() {
    yield takeLatest(REQUEST_GET_RECIPE_LIST, getRecipeListSaga);
    yield takeLatest(REQUEST_GET_RECIPE, getRecipeSaga);
}

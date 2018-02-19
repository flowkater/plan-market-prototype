import axios from "axios";
import storage from 'helpers/storage';

const URL = "http://127.0.0.1:5000";
// const URL = "https://55x12biogf.execute-api.ap-northeast-2.amazonaws.com/staging";

const access_token = storage.get('__PRTD_USER__')['access_token']

const res = axios.create({
    baseURL: URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Access-Token": access_token
    }
});

export const postRegister = data => res.post("/auth/register", data);
export const postLogin = data => res.post("/auth/login", data);
export const postValidate = data => res.post("/auth/validate", data);

export const createRecipe = data => res.post("/recipes", data);
export const getRecipeList = data => res.get("/recipes");
export const getRecipe = RecipeId => res.get("/recipes/" + RecipeId);

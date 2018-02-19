import axios from "axios";

const URL = "http://127.0.0.1:5000";
// const URL = "https://55x12biogf.execute-api.ap-northeast-2.amazonaws.com/staging";

const res = axios.create({
    baseURL: URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export const postRegister = data => res.post("/auth/register", data);
export const postLogin = data => res.post("/auth/login", data);
export const postValidate = data => res.post("/auth/validate", data);

export const createRecipe = data => res.post("/recipes", data);
export const getRecipeList = data => res.get("/recipes");
export const getRecipe = RecipeId => res.get("/recipes/" + RecipeId);

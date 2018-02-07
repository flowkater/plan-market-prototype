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

export const getPlanTemplateList = data => res.get("/plan_templates");
export const getPlanTemplate = planTemplateId => res.get("/plan_templates/" + planTemplateId);

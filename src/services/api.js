import axios from "axios";

const URL = "http://127.0.0.1:5000";

const res = axios.create({
    baseURL: URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export const getPlanTemplateList = data => res.get("/plan_templates");

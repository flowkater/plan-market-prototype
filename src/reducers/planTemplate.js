import { fromJS } from 'immutable';
import { handleActions } from "redux-actions";

import * as ActionTypes from "../actions/ActionTypes";

const initialState = fromJS({
    status: 'INIT',
    planTemplateList: [],
    planTemplate: {
        id: 2238,
        created_at: 1517871283.89,
        updated_at: 1517871283.89,
        name: "기출문제 1회독 완료 수험생 대상 2018전한길 한국사 3.0 전범위 기출문제 1개월 학습 계획",
        description: "공무원 시험을 준비하면서 가장 중요한 과정이 기출문제를 반복해서 풀어가는 것인데요.\n 이미 기출문제 풀이 1회독을 완료한 수험생의 경우, 두번째 기출문제 풀이는 1개월동안 충분히 회독이 가능합니다.\n 선택지 하나하나, 문제 하나하나를 이론과 연관해 꼼꼼하게 풀었던 첫번째 기출문제 풀이와 달리 두번째 기출문제 풀이는 1회독에서 틀렸던 문제와 헷갈렸던 문제를 위주로 속도감있게 진행하실 것을 추천합니다.\n 이번 추천 계획은 2018전한길 한국사 3.0 전범위 기출문제집을 1개월 동안 두번째 회독을 완료하는 계획입니다.\n 학습 방법은 간단합니다. 기출문제를 이전에 맞았던 문제가 아닌 헷갈리거나 틀렸던 문제, 그리고 선택지를 위주로 다시 한번 문제를 풀어보고 선택지의 OX여부를 판단해보는 것입니다. 이렇게 한번 더 기출문제집을 오답 위주로 풀어가면서 다음 회독을 위해 또다시 헷갈리거나 틀리는 내용은 다시 한번 표시를 하고, 필요한 경우 관련 이론을 기본서로 돌아가 찾아 읽고 암기해줍니다. 이런식으로 누적해서 표시를 해나가다 보면 나에게 부족한 파트, 부족한 이론이 무엇인지 파악하는 것이 가능하고 기출문제 회독 속도를 단축시키는 것도 가능합니다. \n 복습은 주 1회 일주일 학습 분량을 누적해서 진행하는데요. 학습을 진행하면서 한번 더 표시한, 즉 또다시 모르거나 헷갈렸던 문제와 선택지를 다시 한번 풀어보면서 여전히 모르는 내용을 기본서로 찾아가 읽고 암기를 해줍니다. 개인마다 차이가 있겠지만 학습시간은 2시간, 복습시간은 3시간 이내로 학습을 마치는 것이 가능할 것입니다.",
        summary: null,
        conditions: [
            {
                name: "level",
                value_type: "string",
                string_value: "고수"
            },
            {
                name: "term",
                value_type: "int",
                int_value: 60
            },
            {
                name: "repeat",
                value_type: "int",
                int_value: 1
            }
        ],
        task_templates: [
            {
                id: 15,
                created_at: 1517871283.913,
                updated_at: 1517871283.913,
                name: "문제풀기",
                description: "- 틀린/헷갈린 문제와 선택지 다시 보기\n - 또다시 모르는 내용 표시\n - 관련 이론 기본서 찾아 읽고 암기",
                task_template_type: "학습",
                learning_minutes: 120,
                amount: 75,
                unit: "페이지",
                assignment_type: "day_of_week",
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false,
                monday_order: 0,
                tuesday_order: 0,
                wednesday_order: 0,
                thursday_order: null,
                friday_order: null,
                saturday_order: null,
                sunday_order: null,
                plan_template_id: 2238
            },
            {
                id: 16,
                created_at: 1517871283.914,
                updated_at: 1517871283.914,
                name: "누적복습",
                description: "- 한번 더 틀렸던 문제 다시 풀어보기\n- 여전히 모르는 내용 기본서 찾아 읽고 암기",
                task_template_type: "복습",
                learning_minutes: 180,
                amount: 225,
                unit: "페이지",
                assignment_type: "day_of_week",
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: true,
                sunday: false,
                monday_order: null,
                tuesday_order: null,
                wednesday_order: null,
                thursday_order: null,
                friday_order: null,
                saturday_order: 0,
                sunday_order: null,
                plan_template_id: 2238
            }
        ]
    }
});

// export default function (state = planTemplateInitialState, action = {}) {
//     switch (action.type) {
//         default:
//         return state;
//     }
// }

export default handleActions(
    {
        [ActionTypes.REQUEST_GET_PLAN_TEMPLATE_LIST_SUCCESS]: (state, action) => state.set("planTemplateList", fromJS(action.payload.planTemplateList))
    },
    initialState
);

import React, { Component } from 'react'
import { Table } from 'reactstrap';

class TaskTemplateTable extends Component {
    state = {
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

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                        <th>일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default TaskTemplateTable

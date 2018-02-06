import React, { Component } from 'react';
import { Table } from 'reactstrap';


class WeeklyTaskTable extends Component {
    render() {
        const taskTemplateRow = (
            <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>test</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        );

        return (
            <Table hover>
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
                    {taskTemplateRow}
                </tbody>
            </Table>
        );
    }
}

export default WeeklyTaskTable;
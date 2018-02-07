import React, { Component } from 'react';
import { Table } from 'reactstrap';


class WeeklyTaskTable extends Component {
    render() {
        const { taskTemplateList } = this.props;
        console.log(taskTemplateList, "111");

        const taskTemplateRow = taskTemplateList.map((taskTemplate, i) => 
            <tr key={i}>
                {taskTemplate.monday ? <td>{taskTemplate.name}</td> : <td></td>}
                {taskTemplate.tuesday ? <td>{taskTemplate.name}</td> : <td></td>}
                {taskTemplate.wednesday ? <td>{taskTemplate.name}</td> : <td></td>}
                {taskTemplate.thursday ? <td>{taskTemplate.name}</td> : <td></td>}
                {taskTemplate.friday ? <td>{taskTemplate.name}</td> : <td></td>}
                {taskTemplate.saturday ? <td>{taskTemplate.name}</td> : <td></td>}
                {taskTemplate.sunday ? <td>{taskTemplate.name}</td> : <td></td>}
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
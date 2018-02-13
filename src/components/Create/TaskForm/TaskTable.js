import React, { Component } from 'react';
import { Table } from 'reactstrap';


class TaskTable extends Component {
    render() {
        const { taskList } = this.props;
        console.log(taskList, "111");

        const taskRow = taskList.map((task, i) => 
            <tr key={i}>
                {task.monday ? <td>{task.name}</td> : <td></td>}
                {task.tuesday ? <td>{task.name}</td> : <td></td>}
                {task.wednesday ? <td>{task.name}</td> : <td></td>}
                {task.thursday ? <td>{task.name}</td> : <td></td>}
                {task.friday ? <td>{task.name}</td> : <td></td>}
                {task.saturday ? <td>{task.name}</td> : <td></td>}
                {task.sunday ? <td>{task.name}</td> : <td></td>}
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
                    {taskRow}
                </tbody>
            </Table>
        );
    }
}

export default TaskTable;
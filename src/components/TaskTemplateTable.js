import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { TaskTemplateItem } from '.'

class TaskTemplateTable extends Component {
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
                        <td>
                        {
                            this.props.taskTemplates.map((task_template) => {
                                return (<TaskTemplateItem TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default TaskTemplateTable

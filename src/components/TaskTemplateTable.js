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
                            this.props.taskTemplates.filter((task_template) => {
                                return task_template.monday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.filter((task_template) => {
                                return task_template.tuesday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.filter((task_template) => {
                                return task_template.wednesday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.filter((task_template) => {
                                return task_template.thursday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.filter((task_template) => {
                                return task_template.friday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.filter((task_template) => {
                                return task_template.saturday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.filter((task_template) => {
                                return task_template.sunday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
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

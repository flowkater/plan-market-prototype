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
                            this.props.taskTemplates.sort((a, b) => {
                                return (a.monday_order === null ? 0 : a.monday_order) - (b.monday_order === null ? 0 : b.monday_order)
                            }).filter((task_template) => {
                                return task_template.monday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.sort((a, b) => {
                                return (a.tuesday_order === null ? 0 : a.tuesday_order) - (b.tuesday_order === null ? 0 : b.tuesday_order)
                            }).filter((task_template) => {
                                return task_template.tuesday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.sort((a, b) => {
                                return (a.wednesday_order === null ? 0 : a.wednesday_order) - (b.wednesday_order === null ? 0 : b.wednesday_order)
                            }).filter((task_template) => {
                                return task_template.wednesday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.sort((a, b) => {
                                return (a.thursday_order === null ? 0 : a.thursday_order) - (b.thursday_order === null ? 0 : b.thursday_order)
                            }).filter((task_template) => {
                                return task_template.thursday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.sort((a, b) => {
                                return (a.friday_order === null ? 0 : a.friday_order) - (b.friday_order === null ? 0 : b.friday_order)
                            }).filter((task_template) => {
                                return task_template.friday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.sort((a, b) => {
                                return (a.saturdayder === null ? 0 : a.saturday_order) - (b.saturdayder === null ? 0 : b.saturday_order)
                            }).filter((task_template) => {
                                return task_template.saturday
                            }).map((task_template, index) => {
                                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
                            })
                        }
                        </td>
                        <td>
                        {
                            this.props.taskTemplates.sort((a, b) => {
                                return (a.sunday_order === null ? 0 : a.sunday_order) - (b.sunday_order === null ? 0 : b.sunday_order)
                            }).filter((task_template) => {
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

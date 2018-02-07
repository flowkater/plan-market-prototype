import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { TaskTemplateItem } from '.'
import './TaskTemplateTable.scss'

class TaskTemplateTable extends Component {
    render() {
        const selectTaskTemplatesOn = (day_of_week) => {
            return this.props.taskTemplates.filter((task_template) => {
                return task_template[day_of_week]
            }).sort((prev, next) => {
                return (
                    (prev[day_of_week + 'order'] === null ? 0 : prev[day_of_week + 'order']) - 
                    (next[day_of_week + 'order'] === null ? 0 : next[day_of_week + 'order'])
                )
            }).map((task_template, index) => {
                return (<TaskTemplateItem key={index} TaskTemplate={task_template} />)
            })
        }

        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th className="day_of_week_col">월</th>
                        <th className="day_of_week_col">화</th>
                        <th className="day_of_week_col">수</th>
                        <th className="day_of_week_col">목</th>
                        <th className="day_of_week_col">금</th>
                        <th className="day_of_week_col">토</th>
                        <th className="day_of_week_col">일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectTaskTemplatesOn('monday')}</td>
                        <td>{selectTaskTemplatesOn('tuesday')}</td>
                        <td>{selectTaskTemplatesOn('wednesday')}</td>
                        <td>{selectTaskTemplatesOn('thursday')}</td>
                        <td>{selectTaskTemplatesOn('friday')}</td>
                        <td>{selectTaskTemplatesOn('saturday')}</td>
                        <td>{selectTaskTemplatesOn('sunday')}</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

TaskTemplateTable.propTypes = {
    taskTemplates: PropTypes.array.isRequired
};

export default TaskTemplateTable

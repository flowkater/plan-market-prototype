import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import { TaskTemplateItem } from '.'

class TaskTable extends Component {
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
            <div className="TaskTemplateTable">
                <div>
                    <Table bordered>
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
                </div>
            </div>
        )
    }
}

TaskTable.propTypes = {
    taskTemplates: PropTypes.array.isRequired
};

export default TaskTable

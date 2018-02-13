import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import TaskItem from './TaskItem'

class TaskTable extends Component {
    render() {
        const selectTaskListOn = (day_of_week) => {
            return this.props.taskList.filter((task) => {
                return task[day_of_week]
            }).sort((prev, next) => {
                return (
                    (prev[day_of_week + 'order'] === null ? 0 : prev[day_of_week + 'order']) - 
                    (next[day_of_week + 'order'] === null ? 0 : next[day_of_week + 'order'])
                )
            }).map((task, index) => {
                return (<TaskItem key={index} Task={task} />)
            })
        }

        return (
            <div className="TaskTemplateTable">
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
                            <td>{selectTaskListOn('monday')}</td>
                            <td>{selectTaskListOn('tuesday')}</td>
                            <td>{selectTaskListOn('wednesday')}</td>
                            <td>{selectTaskListOn('thursday')}</td>
                            <td>{selectTaskListOn('friday')}</td>
                            <td>{selectTaskListOn('saturday')}</td>
                            <td>{selectTaskListOn('sunday')}</td>
                        </tr>
                    </tbody>
                </Table>                
            </div>
        )
    }
}

TaskTable.propTypes = {
    taskList: PropTypes.array.isRequired
};

export default TaskTable

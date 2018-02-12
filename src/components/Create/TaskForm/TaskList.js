import React, { Component } from 'react';
import { Jumbotron } from "reactstrap";
import TaskItem from "./TaskItem";
      

class TaskList extends Component {
    render() {
        const { taskList, TaskFormActions, modal } = this.props;

        const listComponent = taskList.sort((a, b) => a.order - b.order).map((task, i) =>
            <TaskItem 
                task={task} 
                TaskFormActions={TaskFormActions}
                modal={modal}
                index={i}
                key={i} />
        );

        const jumbotron = (
            <Jumbotron />
        );

        return (
            <ul>
                {taskList.length !== 0 ? listComponent : jumbotron}
            </ul>
        );
    }
}

export default TaskList;
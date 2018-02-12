import React, { Component } from 'react';
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";
import TaskTable from "./TaskTable";
import { Col, Row } from "reactstrap";

class TaskForm extends Component {
    render() {
        const { taskItem, modal, taskList, TaskFormActions, formType } = this.props;
        return (
            <div>
                <h4>상세 공부 스케줄</h4>
                <hr />
                <Row>
                    <Col sm={10}>
                        <TaskList 
                            taskItem={taskItem}
                            modal={modal}
                            taskList={taskList}
                            TaskFormActions={TaskFormActions}
                        />
                    </Col>
                    <Col sm={2}>
                        <TaskModal 
                            buttonLabel="+상세 일정 추가"
                            taskItem={taskItem}
                            formType={formType}
                            modal={modal}
                            TaskFormActions={TaskFormActions}
                            taskList={taskList}
                        />
                    </Col>
                </Row>
                <TaskTable
                    taskList={taskList} 
                />
            </div>
        );
    }
}

export default TaskForm;
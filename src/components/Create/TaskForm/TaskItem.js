import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from 'redux-form/immutable';
import { Button } from "reactstrap";

class TaskItem extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            weekdays: [
                {key: 'monday', value: '월'}, 
                {key: 'tuesday',value:'화'}, 
                {key: 'wednesday', value: '수'}, 
                {key: 'thursday', value: '목'}, 
                {key: 'friday', value: '금'}, 
                {key: 'saturday', value: '토'}, 
                {key: 'sunday', value: '일'}]
        };
           
    }
    
    onEdit() {
        const { TaskFormActions, modal, task, dispatch, index } = this.props;
        TaskFormActions.toggleNewTask(!modal);
        TaskFormActions.editNewTask({taskItem: task, index: index});
        dispatch(change('task', 'name', task.name))
        dispatch(change('task', 'task_template_type', task.task_template_type))
        dispatch(change('task', 'description', task.description))
        dispatch(change('task', 'amount', task.amount))
        dispatch(change('task', 'unit', task.unit))
        dispatch(change('task', 'learning_minutes', task.learning_minutes))
        this.state.weekdays.forEach((weekday) => {
            dispatch(change('task', weekday.key, task[weekday.key]))
        });
    }

    onUp(e) {
        e.preventDefault();
        const { TaskFormActions, task } = this.props;
        TaskFormActions.upNewTask(task.order);
    }

    onDown(e) {
        e.preventDefault();
        const { TaskFormActions, task } = this.props;
        TaskFormActions.downNewTask(task.order);
    }

    onRemove(e) {
        e.preventDefault();
        const { TaskFormActions, index } = this.props;
        TaskFormActions.removeNewTask(index);
    }

    render() {
        const { task } = this.props;

        return (
            <li>
                <span onClick={this.onEdit.bind(this)}>{task.name}</span>{' '}
                <Button type="button" outline color="secondary" size="sm" onClick={this.onUp.bind(this)}>△</Button>{' '}
                <Button type="button" outline color="secondary" size="sm" onClick={this.onDown.bind(this)}>▽</Button>{' '}
                <Button type="button" color="danger" size="sm" onClick={this.onRemove.bind(this)}>X</Button>
            </li>
        );
    }
}

export default connect()(TaskItem);
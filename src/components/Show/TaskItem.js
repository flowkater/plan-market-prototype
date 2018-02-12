import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';
import { convertNewLineToBr } from 'helpers/stringConverter'

const taskTemplateTypeMap = {
    preview: "예습",
    learning: "학습",
    review: "복습",
    예습: "예습",
    학습: "학습",
    복습: "복습"
}

class TaskItem extends Component {
    render() {
        const { Task } = this.props
        return (
            <Card body>
                <CardTitle>[{taskTemplateTypeMap[Task.task_template_type]}] {Task.name}: {Task.amount}{Task.unit}</CardTitle>
                <CardText>
                    {convertNewLineToBr(Task.description)}
                </CardText>
                <CardFooter className="text-muted">예상 학습시간: {Task.learning_minutes}분</CardFooter>
            </Card>
        )
    }
}

TaskItem.propTypes = {
    Task: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        task_template_type: PropTypes.string.isRequired,
        learning_minutes: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,

        monday: PropTypes.boolean,
        tuesday: PropTypes.boolean,
        wednesday: PropTypes.boolean,
        thursday: PropTypes.boolean,
        friday: PropTypes.boolean,
        saturday: PropTypes.boolean,
        sunday: PropTypes.boolean,

        monday_order: PropTypes.number,
        tuesday_order: PropTypes.number,
        wednesday_order: PropTypes.number,
        thursday_order: PropTypes.number,
        friday_order: PropTypes.number,
        saturday_order: PropTypes.number,
        sunday_order: PropTypes.number
    }).isRequired
};
export default TaskItem

import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Card, CardTitle, CardText, CardFooter } from 'reactstrap';
import './TaskTemplateItem.scss'
import { convertNewLineToBr } from '../utils/stringConverter'

class TaskTemplateItem extends Component {
    render() {
        const { TaskTemplate } = this.props
        return (
            <Card body>
                <CardTitle>[{TaskTemplate.task_template_type}] {TaskTemplate.name}: {TaskTemplate.amount}{TaskTemplate.unit}</CardTitle>
                <CardText>
                    {convertNewLineToBr(TaskTemplate.description)}
                </CardText>
                <CardFooter className="text-muted">예상 학습시간: {TaskTemplate.learning_minutes}분</CardFooter>
            </Card>
        )
    }
}

TaskTemplateItem.propTypes = {
    TaskTemplate: PropTypes.shape({
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
export default TaskTemplateItem

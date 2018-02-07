import React, { Component } from 'react'
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
}

export default TaskTemplateItem

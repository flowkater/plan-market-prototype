import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import { TaskTemplateTable, ConditionTable } from '.';
import { convertNewLineToBr } from '../utils/stringConverter'

class RecipeModal extends Component {
    componentWillMount() {
        
        const { match } = this.props

        this.props.requestGetPlanTemplate({planTemplateId: match.params.plan_template_id})
    }

    render() {
        const { planTemplate } = this.props
        const modal = (
            planTemplate ? (
                <Modal isOpen={this.props.PlanTemplate !== null}>
                    <ModalHeader>{this.props.planTemplate.name}</ModalHeader>
                    <ModalBody>
                        <ConditionTable conditions={this.props.planTemplate.conditions}/>
                        {convertNewLineToBr(this.props.planTemplate.description)}
                        <TaskTemplateTable taskTemplates={this.props.planTemplate.task_templates} />
                    </ModalBody>
                    <ModalFooter>
                        <Link to='/plan_templates'>
                            <Button color="secondary" onClick={this.props.storeSetPlanTemplateToNull}>닫기</Button>
                        </Link>
                    </ModalFooter>
                </Modal>
            ) : (<div></div>)
        )


        return (
            <div className="PlanTemplate">
                {modal}
            </div>
        )
    }
}

export default RecipeModal

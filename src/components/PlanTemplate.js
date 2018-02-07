import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { TaskTemplateTable, ConditionTable } from '.';
import './PlanTemplate.scss'
import { convertNewLineToBr } from '../utils/stringConverter'

class PlanTemplate extends Component {
    componentWillMount() {
        const { match, planTemplate } = this.props

        if(match.params.plan_template_id && !planTemplate) {
            this.props.requestGetPlanTemplate({planTemplateId: match.params.plan_template_id})
        }
    }
    
    render() {
        const { planTemplate } = this.props

        return (planTemplate ? (
            <div className="PlanTemplate">
                <Modal isOpen={this.props.PlanTemplate !== null}>
                    <ModalHeader>{planTemplate.name}</ModalHeader>
                    <ModalBody>
                        <ConditionTable conditions={planTemplate.conditions}/>
                        {convertNewLineToBr(planTemplate.description)}
                        <TaskTemplateTable taskTemplates={planTemplate.task_templates} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.storeSetPlanTemplateToNull}>닫기</Button>
                    </ModalFooter>
                </Modal>
            </div>
            ) : (<div></div>)
        )
    }
}

export default PlanTemplate

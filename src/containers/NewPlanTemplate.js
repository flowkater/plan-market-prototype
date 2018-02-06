import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { PlanTemplateForm } from '../components';
import './NewPlanTemplate.scss'

class NewPlanTemplate extends Component {

    submit = values => {
        console.log(values);
    }

    render() {
        return (
            <Container>
               <h1>새로운 계획 작성</h1>
               <PlanTemplateForm onSubmit={this.submit} />
            </Container>
        );
    }
}

export default NewPlanTemplate;
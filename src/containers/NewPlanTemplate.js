import React, { Component } from 'react';
import { ContentsForm, PlanTemplateForm } from '../components';

class NewPlanTemplate extends Component {
    render() {
        return (
            <div>
               <h1>NewPlanTemplate</h1> 
               <ContentsForm />
               <PlanTemplateForm />
            </div>
        );
    }
}

export default NewPlanTemplate;
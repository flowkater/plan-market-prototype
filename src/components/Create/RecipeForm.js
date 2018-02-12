import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Button } from "reactstrap";
import { Field, reduxForm } from 'redux-form/immutable';
import TaskForm from "./TaskForm/TaskForm";
import ContentsForm from "./ContentsForm";

class RecipeForm extends Component {

    handleClick(e) {
        e.preventDefault();
        const { CreateRecipeActions } = this.props;
        CreateRecipeActions.requestPostRecipe();
    }

    render() {
        const { 
            formType, 
            taskItem, 
            taskList, 
            toggle, 
            TaskFormActions, 
            pristine, 
            submitting 
        } = this.props;

        return (
            <Form>
                <FormGroup row>
                    <Label for="name" sm={4}>추천계획 이름</Label>
                    <Col sm={8}>
                        <Field 
                            className="form-control" 
                            name="name" 
                            component="input" 
                            type="text" 
                            placeholder="추천계획 이름" />
                    </Col>
                </FormGroup>
                <hr />
                <ContentsForm />
                <hr />
                <FormGroup row>
                    <Col sm={3}>
                        <Label for="level">학습자 레벨</Label>
                        <Field 
                            className="form-control"
                            name="level"
                            component="select">
                            <option />
                            <option>초수</option>
                            <option>중수</option>
                            <option>고수</option>
                            <option>보충</option>
                        </Field>
                    </Col>
                    <Col sm={3}>
                        <Label for="planNumberInfo">학습 기간(일)</Label>
                        <Field 
                            className="form-control" 
                            name="term" 
                            component="input" 
                            type="number" 
                            placeholder="학습 기간(일)" />
                    </Col>

                    <Col sm={3}>
                        <Label for="planDue">시험까지 남은 기간(일)</Label>
                        <Field 
                            className="form-control" 
                            name="due" 
                            component="input" 
                            type="number" 
                            placeholder="시험까지 남은 기간(일)" />
                    </Col>

                    <Col sm={3}>
                        <Label for="planRecurring">회독 횟수</Label>
                        <Field 
                            className="form-control" 
                            name="repeat" 
                            component="input" 
                            type="number" 
                            placeholder="회독 횟수 (회)" />
                    </Col>
                </FormGroup>
                <hr />
                <FormGroup>
                    <Label for="planDescription">추천 계획 소개/설명</Label>
                    <Field 
                        className="form-control" 
                        id="planDescription"
                        name="description" 
                        component="textarea" 
                        placeholder="추천 계획에 대한 자세한 설명을 적어주세요." />
                </FormGroup>
                <br />
                <TaskForm
                    taskItem={taskItem}
                    modal={toggle}
                    taskList={taskList}
                    TaskFormActions={TaskFormActions}
                    formType={formType}
                 />
                <Button type="button" onClick={this.handleClick.bind(this)} disabled={pristine || submitting}>Submit</Button>
            </Form>
        );
    }
}

RecipeForm = reduxForm({
    form: 'recipe'
})(RecipeForm)

export default RecipeForm;
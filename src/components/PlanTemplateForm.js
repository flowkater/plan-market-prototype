import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Row, Jumbotron, Button } from "reactstrap";
import { Field, reduxForm } from 'redux-form';
import { ContentsForm, WeeklyTaskTable, TaskTemplateForm } from ".";

class PlanTemplateForm extends Component {
    render() {
        const handleSubmit = this.props.onSubmit;

        return (
            <Form onSubmit={handleSubmit}>
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
                <Row>
                    <Col sm={10}>
                        <Jumbotron />
                    </Col>
                    <Col sm={2}>
                        <TaskTemplateForm buttonLabel="+상세 일정 추가" />
                    </Col>
                </Row>
                <WeeklyTaskTable />
                <Button>submit</Button>
            </Form>
        );
    }
}

PlanTemplateForm = reduxForm({
    form: 'planTemplate'
})(PlanTemplateForm)

export default PlanTemplateForm;
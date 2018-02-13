import React, { Component } from 'react'
import PropTypes from "prop-types";
import { Table } from 'reactstrap';

const conditionNameMap = {
    level: "학습자 수준", 
    due: "시험까지 남은 기간",
    term: "학습 기간",
    repeat: "회독 횟수"
}

class ConditionTable extends Component {
    render() {
        let valueFrom = (condition) => {
            switch (condition.value_type) {
                case 'int':
                    return condition.int_value;
                case 'string':
                    return condition.string_value;
                case 'boolean':
                    return condition.boolean_value;
                default:
                    return ""
            }
        }

        return (
            <Table>
                <tbody>
                    {
                        this.props.conditions.map((condition, index) => {
                            return (
                                <tr key={index}>
                                    <th>{conditionNameMap[condition.name]}</th>
                                    <td>{valueFrom(condition)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        )
    }
}

ConditionTable.propTypes = {
    conditions: PropTypes.array.isRequired
};

export default ConditionTable

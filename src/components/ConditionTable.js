import React, { Component } from 'react'
import { Table } from 'reactstrap';

class ConditionTable extends Component {
    render() {
        let title_from = (condition) => {
            switch (condition.name) {
                case 'level':
                    return "학습자 수준";
                case 'due':
                    return "시험까지 남은 기간";
                case 'term':
                    return "학습 기간";
                case 'repeat':
                    return "회독 횟수";
                default:
                    return ""
            }
        }

        let value_from = (condition) => {
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
            <div>
                <Table>
                    <tbody>
                        {
                            this.props.conditions.map((condition, index) => {
                                return (
                                    <tr key={index}>
                                        <th>{title_from(condition)}</th>
                                        <td>{value_from(condition)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ConditionTable

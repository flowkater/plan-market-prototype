import React, { Component } from 'react'
import { Table } from 'reactstrap';

class ConditionTable extends Component {
    state = {
        conditions: [
            {
                name: "level",
                value_type: "string",
                string_value: "고수"
            },
            {
                name: "term",
                value_type: "int",
                int_value: 60
            },
            {
                name: "repeat",
                value_type: "int",
                int_value: 1
            }
        ]
    }

    render() {
        return (
            <div>
                <Table>
                    <tbody>
                        <tr>
                            <th>Mark</th>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <th>Jacob</th>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th>Larry</th>
                            <td>the Bird</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ConditionTable

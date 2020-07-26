import React from 'react'
import './styleSheet.css'

function Employee(props) {
    console.log(props.employee.name)
    return (
        <React.Fragment>
            <table>
                <tr>
                    <td>{props.employee.name}</td>  <td> {props.employee.job}</td>
                </tr>
            </table>

        </React.Fragment>
    )
}

export default Employee
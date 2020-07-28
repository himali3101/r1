import React from 'react'
import './styleSheet.css'

function Employee(props) {
    console.log(props.employee.name)
    return (
        <div>
            <table>
                <tr>
                    <td>{props.employee.name}</td>  <td> {props.employee.job}</td>
                </tr>
            </table>

        </div>
    )
}

export default Employee
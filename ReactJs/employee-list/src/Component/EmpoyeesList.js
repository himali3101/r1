import React from 'react'
import Employee from './Employee'
import './styleSheet.css'

const cssStyle = {
    wordSpacing: '90px'
}


function EmployeeList() {

    const list = [
        {
            name: "Charlie",
            job: "Janitor"
        },
        {
            name: "Mac",
            job: "Bouncer"
        },
        {
            name: "Dee",
            job: "Aspiring actress"
        },
        {
            name: "Dennis",
            job: "Bartender"
        }
    ]

    const employeeList = list.map(employee => <Employee key={employee.name} employee={employee}></Employee>)

    return (
        <div>
            <table>
                <tr> <th>Name</th> <th>Job</th> </tr>

            </table>
            {employeeList}

        </div>
    )

}

export default EmployeeList
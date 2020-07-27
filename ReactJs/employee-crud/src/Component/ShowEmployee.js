import React from 'react'

function ShowEmployee({ name, job }) {
    return (
        <div>
            <table>
                <tr>
                    <td>{name}</td> <td>{job} </td>
                </tr>
            </table>
        </div>
    )
}

export default ShowEmployee
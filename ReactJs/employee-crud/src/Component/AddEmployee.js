import React, { Component } from 'react'
import ShowEmployee from './ShowEmployee'

class AddEmployee extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            job: '',
            data: []
        }
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleJob = (event) => {
        this.setState({
            job: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            data: this.state.data.push(this.state.name, this.state.job)

        })

        event.preventDefault();
    }

    render() {
        let datas = this.state.data

        let printData = this.state.data.map((data) => <ShowEmployee name={data.name} job={data.job} />
        )
        return (

            <div>
                <table>
                    <tbody>
                        <tr><th>Name</th><th>Job</th></tr>
                    </tbody>
                </table>
                {printData}

                <form onSubmit={this.handleSubmit} >
                    <h1>Add New Employee</h1>
                    <label>Name : </label><br />
                    <input type="text" value={this.state.name} onChange={this.handleName} /><br />

                    <label>Job : </label><br />
                    <input type="text" value={this.state.job} onChange={this.handleJob} /> <br />

                    <input type="submit" value="Submit" />
                </form>

            </div>

        )
    }
}

export default AddEmployee
import React, { Component } from 'react'
import './Calender.css'

class Calender extends Component {

    constructor() {
        super();

        this.state = {
            date: new Date()
        }
    }

    render() {
        let date = this.state.date.toLocaleDateString();
        return (
            <div className="text">{('\n')}{date}</div>
        )
    }
}

export default Calender
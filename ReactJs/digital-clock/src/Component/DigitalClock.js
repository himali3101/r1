import React, { Component } from 'react'
import './DigitalClock.css'
import './Calender.css'
import Calender from './Calender'

class DigitalClock extends Component {

    constructor() {
        super();

        this.state = {
            time: new Date(),
            toggleValue: false
        };
    }

    changeValue = (event) => {
        this.setState({
            toggleValue: !this.state.toggleValue
        })
    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); // every 1 seconds
    }

    componentWillUnmount() { // delete the interval just before component is removed
        clearInterval(this.update);
    }

    render() {

        const { time } = this.state;

        if (this.state.toggleValue) {
            return (
                <div>
                    <div className="calender">DATE
                <label class="switch">
                            <input type="checkbox" onClick={this.changeValue} />
                            <span class="slider round"></span>
                        </label>

                    </div>

                    <div className="clock-border">
                        <div className="digital-clock">
                            {time.toLocaleTimeString()}
                            <Calender>{this.state.toggleValue}</Calender>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="calender">DATE
                <label class="switch">
                            <input type="checkbox" onClick={this.changeValue} />
                            <span class="slider round"></span>
                        </label>

                    </div>

                    <div className="clock-border">
                        <div className="digital-clock">
                            {time.toLocaleTimeString()}
                        </div>
                    </div>
                </div>
            )
        }


    }
}

export default DigitalClock
import React from 'react'

const headingStyle = {
    color: 'orange',
    fontSize: '50px'
}

export function getName(name) {
    return ' ' + name;
}

export function Greet(props) {
    return (
        <div>
            <h1 style={headingStyle}> Hello {this.getName(props)} </h1>
        </div>
    )
}


export default Greet
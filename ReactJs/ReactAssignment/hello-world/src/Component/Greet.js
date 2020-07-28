import React from 'react'

const headingStyle = {
    color: 'orange',
    fontSize: '50px'
}

export function getName(name) {
    return ' ' + name;
}

function Greet() {
    return (
        <div>
            <h1 style={headingStyle}>Hello Himali</h1>
        </div>
    )
}


export default Greet
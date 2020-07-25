import React from 'react'

const headingStyle = {
    color: 'orange',
    fontSize: '50px'
}

function Greet() {
    return (
        <div>
            <h1 style={headingStyle}> Hello World </h1>
        </div>
    )
}

export default Greet
import React from 'react'

const Hello = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )

    // return React.createElement('div', { id: "hello" }, React.createElement('h1', null, 'Hello Himali'));
}

export default Hello;
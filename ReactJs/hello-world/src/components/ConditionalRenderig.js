import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Himali
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>  
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Himali</div>
        // }
        // else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Himali</div> :
        //         <div>Welcome Guest</div>
        // )

        return this.state.isLoggedIn && <div>Welcome Himali</div>
    }
}

export default ConditionalRendering;
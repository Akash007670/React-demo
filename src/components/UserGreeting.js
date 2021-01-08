import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedIn : true
        }
    }
    
    render() {
        return(this.state.isloggedIn && <div>Hello Akash!</div>)

        // return (this.state.isloggedIn ? <div>Welcome Akash!</div> : <div>Welcome guest</div>)

        // let message 
        // if(this.state.isloggedIn){
        //     message = <div><h1>Hello Akash kumar</h1></div>
        // }else{
        //     message = <div>Welcome guest</div>
        // }
        // return <div>{message}</div>


        // if(this.state.isloggedIn){
        //     return(
        //         <div>
        //             <h1>Hello Akash..</h1>
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome guest.
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Hello Akash!</div>
        //         <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting

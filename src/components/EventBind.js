import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message : "Good bye!"
    //     })
    //     console.log(this)
    // }
    
    clickHandler = () => {
        this.setState({
            message : "Good bye!"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick ={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick ={() => this.clickHandler()}>Click</button> //same as above but in arrow funtion */}
                { <button onClick ={this.clickHandler}>Click</button> /*official method for binding in react.js documentation */}
            </div>
        )
    }
}

export default EventBind

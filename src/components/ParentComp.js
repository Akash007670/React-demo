import React, { Component , memo, } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Akash'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Akash'
            })
        } , 2000)
    }
    render() {
        console.log('Parent component render')
        return (
            <div>
                Parent component
                <MemoComp name= {this.state.name} />
                {/* <RegularComp name = {this.state.name} />
                <PureComp name = {this.state.name} /> */}
            </div> 
        )
    }
}

export default ParentComp

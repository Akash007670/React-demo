import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Akash'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }


    getSnapshotBeforeUpdate(prevProps , prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () =>{
        this.setState({
            name: 'Akash kumar sharma '
        })
    }

    render() {
        console.log('LifecyleA render')
        return (
            <div>
                <div>lifecyleA</div>
                <button onClick ={this.changeState}>change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA

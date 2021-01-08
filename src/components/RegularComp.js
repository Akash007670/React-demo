import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log('Regular component render')
        return (
            <div>
                Regular component {this.props.name}
            </div>
        )
    }
}

export default RegularComp

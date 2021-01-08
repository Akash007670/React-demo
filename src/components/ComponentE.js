import React, { Component } from 'react'
import ComponentC from './ComponentC'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// ComponentE.contextType = UserContext (works same as above static ContextType)

export default ComponentE

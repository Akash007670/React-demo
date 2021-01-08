import React, { Component } from 'react'

const Greet = props => {
    // console.log(props)
    const {name,heroName} =props //destructuring for functional component
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

export default Greet;

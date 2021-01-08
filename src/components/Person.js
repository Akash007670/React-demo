import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name} . my age is {person.age} years old. and my skills are {person.skill}.</h2>
        </div>
    )
}

export default Person
 
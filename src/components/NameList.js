import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce','Diana','Clark','Bruce']
    const persons = [
        {
            id : 1,
            name : 'Akash',
            age : 19,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Roshan',
            age : 19,
            skill : 'Angular'
        },
        {
            id : 3,
            name : 'Harneet',
            age : 19,
            skill : 'Vue'
        }
    ]
    const nameList =  names.map((name ,index) => <h2 key ={index}> {index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList

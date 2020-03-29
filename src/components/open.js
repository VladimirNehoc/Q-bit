import React from 'react'


export default function Open(props) {
    const id = props.id
    return(
        <button className='container__delete' onClick={() => props.changeState('delete', '', id)}>╳</button>
    )
}
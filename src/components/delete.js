import React from 'react'


function Delete(props) {
    const id = props.id
    return(
        <button className='container__delete' onClick={() => props.changeState('delete', '', id)}>╳</button>
    )
}

export default Delete
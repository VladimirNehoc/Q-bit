import React from 'react'

function Add(props) {
    return(
        <div className='container__line container__line_add' 
        onKeyUp={(e) => {
            if (e.keyCode === 13) {
                props.changeState('add', e.target.value, e.target) // Передаю елемент в id чтобы в самой функции не прописывать 
            }
        }}>
            <input className='container__input' placeholder='Add New ToDo'></input>
        </div>
    )
}

export default Add
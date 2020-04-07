import React, { useState } from 'react'

const Form = () => {
    const [count, setCount] = useState(0)

    const changeCount = () => {
        let state = count + 1
        setCount(state)
    }

    return (
        <div className='container-form' onClick={changeCount}>
            <button className='container-form__submit'>{ count }</button>
        </div>
    )
}

export default Form
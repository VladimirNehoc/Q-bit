import React from 'react'
import * as _ from 'lodash'
import Button from '../components/open'
import Add from '../components/add'

export default function List(props) {
    const state = props.state
    _.reverse(state)
    return (
        <ul className='container__list'>
            <Add changeState={props.changeState}/>
            {
                _.map(state, (value, i) => {
                    return(
                         <li className='container__line' key={i}>
                        {value}
                        <Button id={i} changeState={props.changeState} />
                        </li>
                    )
                   
                })
            }
        </ul>
    )
}
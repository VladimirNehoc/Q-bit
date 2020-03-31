import React from 'react'
import { FixedSizeList } from 'react-window';

import Button from '../components/delete'
import Add from '../components/add'

function List(props) {
    let state = props.state

    const Row = ({ index, style }) => (
        <div className={index % 2 ? 'container__line container__line_odd' : 'container__line container__line_even'} style={style}>
            <span className='container__line_span'>{state[index]}</span>
            <Button changeState={props.changeState} id={index}></Button>
        </div>
    );
    
    return (
        <div className='container__collapsible'>
            <Add changeState={props.changeState}>Add ToDo</Add>
            <FixedSizeList
                className="container__list"
                height={300}
                itemCount={state.length}
                itemSize={38}
                width={400}
            >
                {Row}
            </FixedSizeList>
        </div>
    )
}

export default List


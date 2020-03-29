import React from 'react';
import './App.css';
import * as _ from 'lodash';
import List from './containers/list'

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            lines: ['CSS Styling', 'JQuery Interactivity', 'HTML Structure']
        }
    }

    changeState(action, text, id) {
        if (action === 'add') {
            if (text.trim() === '') {
                id.value = ''
                return
            }
            let state = this.state.lines
            state = _.concat(state, text)
            this.setState({lines: state})
            id.value = ''
        } else if (action === 'delete') {
            let state = this.state.lines
            _.pullAt(state, id)
            this.setState({lines: state})
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='container__head'>
                    <div className='container__text'>TO-DO LIST</div>  
                    <button className='container__button'>⌃</button>
                </div>
                <List state={this.state.lines} changeState={this.changeState.bind(this)} />
            </div>
        )
    }
}

export default ToDoList
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import './App.css';

import * as _ from 'lodash';

import List from './containers/list'
import Calendar from './components/calendar'
import Time from './components/time'

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            lines: [
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure',
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
                'CSS Styling', 'JQuery Interactivity', 'HTML Structure'
            ]
        }
    }

    changeState(action, text, id) {
        if (action === 'add') {
            if (text.trim() === '') {
                id.value = ''
                return
            }
            let state = this.state.lines
            state.unshift(text)
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
            <div>
                <div className='header'>
                    <Link className='header__link' to='/time'>TIME</Link>
                    <Link className='header__link' to='/calendar'>DATE</Link>
                    <Link className='header__link' to='/'>LIST</Link>
                </div>
                <Switch>
                    <Route path='/time' component={Time} />
                    <Route path='/calendar' component={Calendar} />
                    <Route exact path='/' render={() => (
                        <div className='container'>
                        <div className='container__head'>
                            <div className='container__text'>TO-DO LIST</div>  
                            <button className='container__button'><span>⌃</span></button>
                        </div>
                        <List state={this.state.lines} changeState={this.changeState.bind(this)} />
                    </div>
                    )} />

                </Switch>
            </div>
        )
    }
}

export default ToDoList
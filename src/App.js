import React, { Suspense, useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import './App.css';

import * as _ from 'lodash';
import $ from 'jquery'

const List = React.lazy(() => import('./containers/list'));
const Calendar = React.lazy(() => import('./components/calendar'));
const Time = React.lazy(() => import('./components/time'));
const Form = React.lazy(() => import('./containers/form'))


const ToDoList = () => {
    const [lines, setLines] = useState([
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 
            'CSS Styling', 'JQuery Interactivity', 'HTML Structure', 'CSS Styling', 'JQuery Interactivity', 'HTML Structure'
    ])

    const changeState = (action, text, id) => {
        if (action === 'add') {
            if (text.trim() === '') {
                id.value = ''
                return
            }
            setLines([text, ...lines])
            id.value = ''
        } else if (action === 'delete') {
            setLines(lines.filter((el, i) => (i === id) ? false : true))
        }
    }

    const activeLink = e => {
        if (e.target.classList.contains('header__link')) {
            document.querySelectorAll('.header__link').forEach(el => el.classList.remove('header__link_active'))
            e.target.classList.add('header__link_active')
        }
    }

    const slideList = () => {
        $('.container__collapsible').slideToggle(400, () => { document.querySelector('.container__button').toggleAttribute('done') })  
    }

    return (
        <div>
            <div className='header' onClick={activeLink}>
                <Link className='header__link' to='/time'>TIME</Link>
                <Link className='header__link' to='/calendar'>DATE</Link>
                <Link className='header__link' to='/'>LIST</Link>
                <Link className='header__link' to='/form'>Form</Link>
            </div>
            <Suspense fallback={<div className='loading'>Загрузка...</div>}>
                <Switch>
                    <Route path='/time' component={Time} />
                    <Route path='/calendar' component={Calendar} />
                    <Route path='/form' component={Form} />
                    <Route exact path='/' render={() => (
                        <div className='container'>
                        <div className='container__head'>
                            <div className='container__text'>TO-DO LIST</div>  
                            <button className='container__button' onClick={slideList}><span>⌃</span></button>
                        </div>
                        <List state={lines} changeState={changeState} />
                    </div>
                    )} />
                </Switch>
            </Suspense>
        </div>
    )
}

export default ToDoList

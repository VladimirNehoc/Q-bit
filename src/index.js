import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import $ from 'jquery'

import ToDoList from './App';

ReactDOM.render(
  <BrowserRouter>
    <ToDoList />
  </BrowserRouter>,
  document.getElementById('root')
);


$(
  $('.container__button').click((e) => {
    $('.container__list').slideToggle(300, () => { document.querySelector('.container__button').toggleAttribute('done') })
  })
)


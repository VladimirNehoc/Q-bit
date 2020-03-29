import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './App';
import $ from 'jquery'

ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);


$(
  $('.container__button').click(() => {
    $('.container__list').slideToggle()
  })
)


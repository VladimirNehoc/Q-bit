import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ToDoList from './App';

ReactDOM.render(
  <BrowserRouter>
    <ToDoList />
  </BrowserRouter>,
  document.getElementById('root')
);


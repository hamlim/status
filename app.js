import React from 'react';
import ReactDOM from 'react-dom';
import {TodoApp} from './assets/js/components';

require("./assets/css/app.css");

window.id = 0;

ReactDOM.render(<TodoApp />, document.getElementById('todoApp'));

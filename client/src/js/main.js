import React from 'react';
import ReactDom from 'react-dom';
import App from '../jsx/App.jsx';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

require("../style/style.css");
ReactDom.render(<App/>,document.getElementById('app'));
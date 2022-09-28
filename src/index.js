import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <BrowserRouter basename={'/voomio-front-end-jeni'}>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import './css/application.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App}/>
        <Match exactly pattern="/emails/new" component={App}/>
        <Match pattern="/emails/:emailID" component={App}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}


render(<Root/>, document.querySelector('#main'));

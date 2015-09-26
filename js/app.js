import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';

import ReactRouterRelay from 'react-router-relay';
import {Router, Route, IndexRoute} from 'react-router';

import App from './components/App';
import AppIndex from './components/AppIndex';
import AppDetail from './components/AppDetail';


const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
};


ReactDOM.render((
  <Router createElement={ReactRouterRelay.createElement}>
    <Route path="/" component={App} queries={ViewerQueries}>
      <IndexRoute component={AppIndex} />
      <Route path=":id" component={AppDetail} queries={ViewerQueries} />
    </Route>
  </Router>
), document.getElementById('root'));

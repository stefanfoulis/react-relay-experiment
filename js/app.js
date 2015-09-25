import 'babel/polyfill';
import ReactRouterRelay from 'react-router-relay';
import {Router, Route} from 'react-router';

import App from './components/App';


const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`
};


ReactDOM.render((
  <Router createElement={ReactRouterRelay.createElement}>
    <Route path="/" component={App} queries={ViewerQueries}>
    </Route>
  </Router>
), document.getElementById('root'));

//ReactDOM.render((
//  <Relay.RootContainer
//    Component={App}
//    route={new AppHomeRoute()}
//  />
//), document.getElementById('root'));

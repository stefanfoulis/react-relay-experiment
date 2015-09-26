import 'babel/polyfill';
import React from 'react';
import Relay from 'react-relay';

import Header from '../components/Header.js';
import AppList from '../components/AppList.js';


class App extends React.Component {
  render() {
    var apps = this.props.viewer.apps.edges.map(app => app.node);
    return (
      <div>
        <Header />
        <div className='row'>
          <div className='col-md-2'>
            <AppList apps={apps} />
          </div>
        </div>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        apps(first: 10) {
          edges {
            node {
              id,
              ${AppList.getFragment('apps')},
            },
          },
        },
      },
    `,
  },
});

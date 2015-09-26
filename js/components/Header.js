import 'babel/polyfill';
import React from 'react';
import Relay from 'react-relay';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='#'>app-controller</a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Relay.createContainer(Header, {
  fragments: {
    //viewer: () => Relay.QL`
    //  fragment on User {
    //    widgets(first: 10) {
    //      edges {
    //        node {
    //          id,
    //          name,
    //        },
    //      },
    //    },
    //  }
    //`,
  },
});

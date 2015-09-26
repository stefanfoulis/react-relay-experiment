import 'babel/polyfill';
import React from 'react';
import Relay from 'react-relay';


class AppDetail extends React.Component {
  render() {
    var app = this.props.viewer.app;
    return (
      <div>
        <h3>App Detail</h3>
        id: {app.id}<br/>
        slug: {app.slug}<br/>
        prettyName: {app.prettyName}<br/>
        isDeployed: {app.isDeployed ? "yes" : "no"}<br/>
      </div>
    );
  }
}


export default Relay.createContainer(AppDetail, {
  initialVariables: {
    id: null,
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        app(id: $id) {
          id,
          slug,
          name,
          isDeployed,
          prettyName,
        },
      }
    `,
  },
});

import 'babel/polyfill';
import React from 'react';
import Relay from 'react-relay';


class AppDetail extends React.Component {
  render() {
    console.log(this.props.viewer.apps);
    console.log(this.props.viewer.app);
    var app = this.props.viewer.app;
    return (
      <div>
        <h3>App Detail</h3>
        id: {app.id}<br/>
        prettyName: {app.prettyName}<br/>
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
          name,
          isDeployed,
          prettyName,
        }
      }
    `,
  },
});

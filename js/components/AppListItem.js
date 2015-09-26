import 'babel/polyfill';
import React from 'react';
import Relay from 'react-relay';

class AppListItem extends React.Component {
  render() {
    let {app} = this.props;
    return (
      <a href='#' className='list-group-item'>
        <h4 className='list-group-item-heading'>{app.prettyName}</h4>
        <p><small>
          {app.name} isDeployed: {app.isDeployed ? "yes" : "no"}<br/>
          ID: {app.id}
        </small></p>
      </a>
    );
  }
}

export default Relay.createContainer(AppListItem, {
  fragments: {
    app: () => Relay.QL`
      fragment on App {
        id,
        name,
        isDeployed,
        prettyName,
      }
    `,
  },
});

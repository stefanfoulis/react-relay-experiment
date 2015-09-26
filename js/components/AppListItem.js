import 'babel/polyfill';
import React from 'react';
import Relay from 'react-relay';
import Link from 'react-router/lib/Link';


class AppListItem extends React.Component {
  render() {
    let {app} = this.props;
    return (
      <Link to={`/${app.slug}`} activeClassName='active' className='list-group-item'>
        <h4 className='list-group-item-heading'>{app.prettyName}</h4>
        <p><small>
          {app.name} ID: {app.id}
        </small></p>
      </Link>
    );
  }
}

export default Relay.createContainer(AppListItem, {
  fragments: {
    app: () => Relay.QL`
      fragment on App {
        id,
        slug,
        name,
        isDeployed,
        prettyName,
      }
    `,
  },
});

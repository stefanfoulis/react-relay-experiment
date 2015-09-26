import 'babel/polyfill';
import React from 'react';
import Relay from 'react-relay';
import AppListItem from '../components/AppListItem.js';


class AppList extends React.Component {
    render() {
        var apps = this.props.apps;
        return (
            <div className='list-group'>{apps.map(app =>
                <AppListItem app={app} key={app.id} />
            )}
            </div>
        );
    };
}

export default Relay.createContainer(AppList, {
    fragments: {
        //apps: () => Relay.QL`
        //  fragment on App @relay(plural: true) {
        //      id,
        //      name,
        //  }
        //`,
        apps: () => Relay.QL`
          fragment on App @relay(plural: true) {
              id,
              name,
              ${AppListItem.getFragment('app')},
          }
        `,
    },
});

import 'babel/polyfill';
import AppListItem from '../components/AppListItem.js';


class AppList extends React.Component {
    render() {
        var apps = this.props.viewer.apps;
        return (
            <ul>{apps.edges.map(app =>
                <AppListItem app={app.node} />
            )}
            </ul>
        );
    };
}

export default Relay.createContainer(AppList, {
    fragments: {
        viewer: () => Relay.QL`
          fragment on User {
            apps(first: 10) {
              edges {
                node {
                  id,
                  name,
                  ${AppListItem.getFragment('app')},
                },
              },
            },
          }
        `,
    },
});

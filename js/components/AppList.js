import 'babel/polyfill';
import AppListItem from '../components/AppListItem.js';


class AppList extends React.Component {
    render() {
        var apps = this.props.apps;
        return (
            <ul>{apps.map(app =>
                <AppListItem app={app} />
            )}
            </ul>
        );
    };
}

export default Relay.createContainer(AppList, {
    fragments: {
        apps: () => Relay.QL`
          fragment on App @relay(plural: true) {
              id,
              name,
              ${AppListItem.getFragment('app')},
          }
        `,
    },
});

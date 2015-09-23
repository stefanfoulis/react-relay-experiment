import 'babel/polyfill';

class AppList extends React.Component {
    render() {
        //var apps = [
        //    {'name': 'my-app'},
        //    {'name': 'my-other-app'}
        //];

        //function app(app) {
        //    return <li key={app.name}>{app.name}</li>
        //};
        var apps = this.props.viewer.apps;
        return (
            <ul>{apps.edges.map(app =>
                <li>{app.node.name} (ID: {app.node.id})</li>
            )}
            </ul>
        );
        //return <div>Whatever</div>
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
                },
              },
            },
          }
        `,
    },
});

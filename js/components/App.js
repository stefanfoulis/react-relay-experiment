import 'babel/polyfill';
import Header from '../components/Header.js';
import AppList from '../components/AppList.js';


class App extends React.Component {
  render() {
    var apps = this.props.viewer.apps.edges.map(app => app.node);
    console.log(apps);
    return (
      <div>
        <Header />
        <h1>Widget list</h1>
        <ul>
          {this.props.viewer.widgets.edges.map(edge =>
            <li>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
        <AppList apps={apps} />
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: 10) {
          edges {
            node {
              id,
              name,
            },
          },
        },
        apps(first: 10) {
          edges {
            node {
              ${AppList.getFragment('apps')},
            }
          }
        },
      },
    `,
  },
});

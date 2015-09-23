import 'babel/polyfill';

class AppListItem extends React.Component {
  render() {
    var app = this.props.app;
    return (
      <li>
        {app.node.name} deployed: {app.node.isDeployed} (ID: {app.node.id})
      </li>
    );
  }
}

export default Relay.createContainer(AppListItem, {
  fragments: {
    //app: () => Relay.QL`
    //  fragment on App {
    //    id,
    //    name,
    //    isDeployed,
    //  }
    //`,
  },
});

import 'babel/polyfill';

class AppListItem extends React.Component {
  render() {
    let {app} = this.props;
    console.log(app);
    return (
      <li key={app.id}>
        {app.prettyName} isDeployed: {app.isDeployed ? "yes" : "no"} (ID: {app.id})
      </li>
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

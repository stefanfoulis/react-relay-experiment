import 'babel/polyfill';
import React from 'react';
import Relay from 'react-relay';


class AppIndex extends React.Component {
    render() {
        return (
          <h1>Applications</h1>
        );
    };
}

export default Relay.createContainer(AppIndex, {
    fragments: {
    },
});

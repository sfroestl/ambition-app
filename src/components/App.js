import React from 'react-native';
import { View, Text } from 'react-native';
import { connect } from 'react-redux/native';

class App extends React.Component {
  displayName: 'AppContainer'

  render() {
    return (
      <View>
        <Text>Hallo!</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps, {})(App);

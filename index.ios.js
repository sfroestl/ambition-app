'use strict';

import React, { Component, AppRegistry } from 'react-native';
import { Provider } from 'react-redux/native';

import App from './src/components/App';
import createStoreWithMiddleware from './src/store/configureStore';

const store = createStoreWithMiddleware();

class AmbitionApp extends Component {
  render() {
    return (
      <Provider store={ store }>
        { () => <App />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AmbitionApp', () => AmbitionApp);

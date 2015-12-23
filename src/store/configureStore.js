import { createStore, applyMiddleware} from 'redux';
import reducer from '../reducers';
import { loggingMiddleware } from '../middlewares';

function createStoreWithMiddleware() {
  const middlewares = [
    loggingMiddleware
  ];

  return applyMiddleware(...middlewares)(createStore)(reducer);
}

export default function () {
  return createStoreWithMiddleware();
}

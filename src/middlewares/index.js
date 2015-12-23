export function loggingMiddleware(store) {
  return function (dispatch) {
    return function (action) {
      console.log('-> Dispatch action ', action, store.getState().toJS());
      dispatch(action);
    }
  }
}

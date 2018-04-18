import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from '~/reducers';
import sagas from '~/sagas';

export default function createStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    sagaMiddleware,
    createLogger(),
  ];

  /* eslint "no-underscore-dangle": 0 */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = _createStore(reducers, initialState, enhancer);
  sagaMiddleware.run(function* () { yield sagas; });
  return store;
}


import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const logger = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

export default function configureStore( initialState ) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
      sagaMiddleware, logger
    )
  );

  sagaMiddleware.run( rootSaga );
  return store;
}

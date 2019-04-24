import modules from './modules';
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import mySaga from "sagas";


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    modules, /* preloadedState, */
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(mySaga);
  return store;
}
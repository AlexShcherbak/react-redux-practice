import { applyMiddleware, combineReducers, compose } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import apiReducer from 'modules/api/reducer';
import apiRootSaga from 'modules/api/saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const reducers = combineReducers({
  api: apiReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(apiRootSaga);

export default store;

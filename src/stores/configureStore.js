import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {createStore, compose, applyMiddleware} from 'redux';
import {name as appName} from '../../app.json';
import rootReducer from 'reducers';
import {signIn} from 'actions';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  blacklist: [],
  whitelist: ['auth', 'user', 'order'],
  keyPrefix: appName,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  return createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
};

const getAsyncStorage = () => {
  return dispatch => {
    AsyncStorage.getItem('userToken').then(async userToken => {
      dispatch(signIn(userToken));
      if (userToken) {
        // fetch user data when user open the app
      }
    });
  };
};

export default () => {
  let store = configureStore();
  let persistor = persistStore(store);
  store.dispatch(getAsyncStorage());
  return {store, persistor};
};

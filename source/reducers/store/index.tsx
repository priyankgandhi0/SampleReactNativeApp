import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import RootReducer from '../index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

// Root reducer with persist config
const reducers = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
  },
  RootReducer,
);

const initialState: any = {};

const middlewares: Middleware[] = [];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

// PersistStore contains all the data from store
export const persistor = persistStore(store);

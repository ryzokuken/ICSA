import { AsyncStorage } from 'react-native'; // we need to import AsyncStorage to use as a storage enging
import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'; // add new import
import reducers from './reducers';

const middleWare = [];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

export default configureStore = (onComplete) => {
  const store = autoRehydrate()(createStoreWithMiddleware)(reducers);
  persistStore(store, { storage: AsyncStorage }, onComplete);
  
  return store;
}; 

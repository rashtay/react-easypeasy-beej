/**
 * Author: Rahul Shetty
 *
 * The central redux store of our app is created and exported to be used from
 * here.
 */
import { createStore, persist } from 'easy-peasy';
import storeModel from 'models/index';
import { services } from 'services/index';
import { IS_DEV } from 'utils/config';

const store = createStore(
  persist(storeModel, {
    allow: ['languages'],
    storage: 'localStorage',
  }),
  {
    injections: { ...services },
    devTools: IS_DEV,
  },
); // 👈 create our store

if (IS_DEV) {
  // @types/webpack-env
  if (module.hot) {
    // At times the app breaks. Just reload and start again
    module.hot.accept('../models', () => {
      store.reconfigure(storeModel); // 👈 Here is the magic
    });
  }
}

export default store;

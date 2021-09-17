/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { I18nManager, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { RealmProvider } from 'src/context/realm.context';
import store from 'src/redux/store';
import WindowStack from './src/lib/windowStack';


const App = () => {
  useEffect(() => { I18nManager.allowRTL(false); }, []);
  return (
    <RealmProvider>
      <Provider store={store}>
        <StatusBar backgroundColor="#f1f1f1" barStyle="dark-content" animated />
        <WindowStack />
      </Provider>
    </RealmProvider>
  );
};

export default App;

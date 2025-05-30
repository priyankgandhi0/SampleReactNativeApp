import React from 'react';
import AppNavigation from './source/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './source/reducers/store';
import { MenuProvider } from 'react-native-popup-menu';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MenuProvider>
            <AppNavigation />
          </MenuProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;

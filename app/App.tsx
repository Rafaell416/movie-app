import React from 'react';
import {Provider} from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {store, persistor} from './store';
import {AppNavigator} from './navigators/AppNavigator';
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  const onNavigationStateChange = () => {
    // Navigate state changes
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator onStateChange={onNavigationStateChange} />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

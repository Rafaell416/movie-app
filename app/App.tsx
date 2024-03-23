import React from 'react';
import {Provider} from 'react-redux';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {store} from './store';
import {AppNavigator} from './navigators/AppNavigator';

const App: React.FC = () => {
  const onNavigationStateChange = () => {
    // Navigate state changes
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <AppNavigator onStateChange={onNavigationStateChange} />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

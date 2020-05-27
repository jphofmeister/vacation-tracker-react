import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Dashboard />
    </Provider>
  );
}

export default App;

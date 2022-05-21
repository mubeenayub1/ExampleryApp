import React from 'react';
import MainNav from './src/navigation/mainNav';
import {AuthProvider} from './src/navigation/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <MainNav />
    </AuthProvider>
  );
};
export default App;

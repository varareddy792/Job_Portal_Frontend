import React from 'react';
import AllRoutes from './AllRoutes';
import Header from './components/layout/Header';

const App = () => {

  return (
    <div className="h-screen">
      <Header />
      <AllRoutes />
    </div>
  );
}

export default App;

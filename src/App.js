import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import Assessment from './components/Assessment';
import 'chart.js/auto';
import { Route, Routes } from 'react-router-dom'
import Home from './home';

const App = () => {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/registration' Component={RegistrationForm} />
        <Route path='/assessment' Component={Assessment} />
      </Routes>
    </div>
  );
};

export default App;





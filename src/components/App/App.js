import React from 'react';
import './reset.css';
import './App.css';
import Main from '../Main/Main';
import Header from '../Header/Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <footer>&copy; 2024 K Ntombini</footer>
    </div>
  );
};

export default App;

import React from 'react';

import TodoInput from './components/TodoInput';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <TodoInput/>
      <Footer/>
    </div>
  );
  }

export default App;

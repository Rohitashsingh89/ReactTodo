import React from 'react';

import Header from './components/header';
import TodoInput from './components/TodoInput';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <TodoInput/>
    </div>
  );
  }

export default App;

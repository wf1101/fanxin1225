
import './App.css';
import Message from './Message';
import React from 'react';
import Header from "./Header";
import Background from './Background';

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Background />
      <Message />
    </div>
  )
}

export default App;

import React from 'react';
import './app.scss';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons'
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Header/>
      <ActionButtons/>
      <Table/>
    </div>
  );
}

export default App;

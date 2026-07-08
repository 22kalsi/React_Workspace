import React from 'react';
import AddContact from './components/addContact';
import ViewContact from './components/viewCntacts';
import './App.css';

function App() {
  return (
    <div className="App" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>📱 Contact Manager</h1>
      <AddContact />
      <ViewContact />
    </div>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Board></Board>
      </header>
    </div>
  );
}

export default App;
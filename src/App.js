import React from 'react';
import './App.css';
import ChessBoard from './Components/ChessBoard/ChessBoard.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Magic Chess</h1>
        <ChessBoard />
      </header>
    </div>
  );
}

export default App;

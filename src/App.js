import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <div className="badge">Running on GCP</div>
        <h1>Hello from GKE</h1>
        <p className="subtitle">Your React app is containerised and ready to deploy.</p>

        <div className="counter">
          <button onClick={() => setCount(c => c - 1)}>−</button>
          <span>{count}</span>
          <button onClick={() => setCount(c => c + 1)}>+</button>
        </div>

        <div className="info">
          <div className="info-row">
            <span>Environment</span>
            <span>{process.env.NODE_ENV}</span>
          </div>
          <div className="info-row">
            <span>React version</span>
            <span>18.2</span>
          </div>
          <div className="info-row">
            <span>Served by</span>
            <span>Nginx (Alpine)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

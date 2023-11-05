import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Use ReactDOM.createRoot to render the main component inside the 'root' element.
// The 'root' element is typically a div with the ID 'root' in your HTML.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Render the main App component */}
  </React.StrictMode>
);

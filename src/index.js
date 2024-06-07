import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Check if the root element has child nodes
if (rootElement.hasChildNodes()) {
  // Use hydrate if child nodes exist (server-side rendering)
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  // Otherwise, use render
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

/**
 * Application Entry Point
 * @author Kadir Diego Padin Rodriguez
 * @website rodriguez-digital.de
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Router configuration
const router = {
  basename: process.env.PUBLIC_URL || '/',
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(error => {
        console.log('SW registration failed:', error);
      });
  });
}

// Remove GitHub URL from window.location
if (window.location.href.includes('github.com')) {
  window.history.replaceState({}, document.title, '/');
}

root.render(
  <React.StrictMode>
    <BrowserRouter {...router}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

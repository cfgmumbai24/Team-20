import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext'
import { AuthContextSProvider } from './context/AuthContextS'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AuthContextSProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </AuthContextSProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import ReactQueryProvider from "./provider/ReactQueryProvider";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <Router>
        <App />
      </Router>
    </ReactQueryProvider>
  </StrictMode>
);

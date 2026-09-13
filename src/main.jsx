import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource-variable/inter';

import App from './App.jsx';
import { applyBrandTheme } from './theme/brand.js';
import './index.css';

// Push the brand theme into CSS variables before the first paint.
applyBrandTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

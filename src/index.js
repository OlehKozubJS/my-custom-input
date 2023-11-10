const { StrictMode } = require('react');
const { createRoot } = require('react-dom/client');
const { App } = require('./components/App');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

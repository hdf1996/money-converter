import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

const app = document.createElement('div');
document.body.appendChild(app);

render(<App/>, app);

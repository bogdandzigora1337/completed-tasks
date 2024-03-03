import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

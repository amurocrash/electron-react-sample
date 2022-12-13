import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import './assets/styles/global.scss'
import 'antd/dist/antd.min.css'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <App />
)


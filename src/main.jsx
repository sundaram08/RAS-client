import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import './index.css'
import { Provider } from 'react-redux'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Roboto', 'Open Sans','Mathilga','San Francisco']
  }
});

const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children:[
    { path: "",
      element: <Home/>
    },
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)

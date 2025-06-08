import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ContactComponent from './ContactComponent';
import Component1 from './component1';
import Component2 from './component-2';
import Component3 from './component-3';
import Component4 from './component-4';
import Component5 from './component-5';
import ReadMore from './Readmore';



const root = ReactDOM.createRoot(document.getElementById('root'));
const allRoute = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/readmore',
      element: <ReadMore/>
    },
    {
      path: '/contact',
      element: <ContactComponent/>
    
    },
    {
      path: '/component-1',
      element: <Component1/>

    },
    {
      path: '/component-2',
      element: <Component2/>

    },
    {
      path: '/component-3',
      element: <Component3/>

    },
    {
      path: '/component-4',
      element: <Component4/>

    },
    {
      path: '/component-5',
      element: <Component5/>

    }
   
  ]
)

 root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

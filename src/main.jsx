import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorPage from './components/ErrorPage'
import Blog from './components/Blog'
import Statistc from './components/Statistc'
import JobDetails from './components/JobDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,   
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('datas.json'),
      },
      {
        path: 'statistcs',
        element: <Statistc></Statistc>,
        loader: () => fetch('statistc.json'),
        
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('datas.json'),
        // loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },

      {
        path: 'blog',
        element: <Blog></Blog>

      },

      // {
      //   path: 'loader',
      //   element: <LoadingSpinner></LoadingSpinner>
      // },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode> eitar jono duibar kore console e print hoy.... 
  
    // <App />
    <RouterProvider router={router} />
  // </React.StrictMode>,
)

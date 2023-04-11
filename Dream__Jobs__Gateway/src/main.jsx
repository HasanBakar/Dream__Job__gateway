import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import './index.css';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import DetailsView from './components/DetailsView/DetailsView';
// import { viewDetails } from "./Untilities/Untilities.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: async () => fetch("available__jobs.json"),
    children:[
      {
        path:"/",
        element: <Home/>,
        loader: async () => fetch("jobs__details.json"),
      },


      {
        path:"/:jobId",
        element: <DetailsView></DetailsView>,
        loader: async({params}) => {
          
          const dataFile = await fetch("jobs__details.json");
          const jobData = await dataFile.json();
          const data = await jobData.featuredJobs;
          const selectedId = await params.jobId;
          return {data, selectedId};
         }
      },


      {
        path:"/statistics",
        element: <Statistics/>
      },
      {
        path:"/applied-jobs",
        element:<AppliedJobs/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path: "*",
        element:<ErrorComponent/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)

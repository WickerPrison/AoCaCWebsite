import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './tables.css';
import App from './App.jsx';
import Home from './home/home.jsx';
import TalentTree from './talentTree/talentTree.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/TalentTree',
        element: <TalentTree/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './tables.css';
import App from './App.jsx';
import Home from './pages/home/home.jsx';
import TalentTree from './pages/talentTree/talentTree.jsx';
import SpellEffects from './pages/spellEffects/spellEffects.jsx';
import DiceRoller from './pages/diceRoller/diceRoller.jsx';
import MonsterManual from './pages/monsterManual/monsterManual.jsx';


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
      },
      {
        path:"/SpellEffects",
        element: <SpellEffects/>
      },
      {
        path:"/DiceRoller",
        element: <DiceRoller/>
      },
      {
        path: "/MonsterManual",
        element: <MonsterManual/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
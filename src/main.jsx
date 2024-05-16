import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/home/home.jsx';
import TalentTree from './pages/talentTree/talentTree.jsx';
import SpellEffects from './pages/spellEffects/spellEffects.jsx';
import DiceRoller from './pages/diceRoller/diceRoller.jsx';
import MonsterManual from './pages/monsterManual/monsterManual.jsx';
import EncounterBuilder from './pages/encounterBuilder/encounterBuilder.jsx';
import GeneralEquipment from './pages/generalEquipment.jsx';
import ConsumableItems from './pages/consumableItems.jsx';
import MagicItems from './pages/magicItems.jsx';
import Weapons from './pages/weapons/weapons.jsx';


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
      },
      {
        path: "/EncounterBuilder",
        element: <EncounterBuilder/>
      },
      {
        path: "GeneralEquipment",
        element: <GeneralEquipment/>
      },
      {
        path: "ConsumableItems",
        element: <ConsumableItems/>
      },
      {
        path:"MagicItems",
        element: <MagicItems/>
      },
      {
        path:"Weapons",
        element: <Weapons/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
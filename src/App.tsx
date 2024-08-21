import './App.css'
import Home from './Pages/Home'
import Sobre from './Pages/SobreNos'
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Utilizacao from './Pages/Utilizacao';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ajuda from './Pages/Ajuda';
import Participantes from './Pages/Participantes';


const _routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/sobre",
        element: <Sobre/>,
      },
      {
        path: "/ajuda",
        element: <Ajuda/>,
      },
      {
        path: "/participantes",
        element: <Participantes/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/cadastro",
        element: <Cadastro/>,
      },
      {
        path: "/utilizacao",
        element: <Utilizacao/>
      }
    ]
  )

function App() {
  
  return (
    <>
      <RouterProvider router={_routes} />
    </>
  )
}

export default App
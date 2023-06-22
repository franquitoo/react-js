import './App.scss'
import Header from './componentes/header/header';
// pages
import Homepage from './pages/homepage';
import Remeras from './pages/Remeras';
import Busos from './pages/Busos';
import Zapatillas from './pages/Zapatillas';
// pages
// detalles
import Itemdetailcontainer from './componentes/itemdetailcontainer/itemdetailcontainer'
// detalles
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// context
import { cartContextProvider } from './context/cartContext';

function App() {

  return(
    <cartContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/pages/Remeras' element={<Remeras/>} />
        <Route path='/pages/Busos' element={<Busos/>} />
        <Route path='/pages/Zapatillas' element={<Zapatillas/>} />
        <Route path='/detail/:id' element={<Itemdetailcontainer/>}/>
        <Route path='*' element={<h4>Error 404</h4>}/>
        </Routes>
      </BrowserRouter>
    </cartContextProvider>
  )
}

export default App



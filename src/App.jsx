
import './App.scss'
import Header from './componentes/header/Header'
import Homepage from './pages/homepage'
import Remeras from './pages/Remeras'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return(
  <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<Homepage/>}/>
     <Route path='/pages/Remeras' element={Remeras} />
     <Route path='*' element={<h4>Error 404</h4>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App



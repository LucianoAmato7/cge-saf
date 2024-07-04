import Inicio from './components/Inicio';
import Login from './components/Login'
import Rubro from './components/Rubro'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={ <Login/> } />
          <Route path={'/inicio'} element={ <Inicio/> } />
          <Route path={'/rubro/:rubro'} element={ <Rubro/> } />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

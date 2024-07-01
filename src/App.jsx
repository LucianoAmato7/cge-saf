import Home from './components/Home';
import Login from './components/Login'
import Rubro from './components/Rubro'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={ <Login/> } />
          <Route path={'/inicio'} element={ <Home/> } />
          <Route path={'/rubro/:rubro'} element={ <Rubro/> } />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

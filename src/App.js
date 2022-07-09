
//IMPORTACIONES
import DashboardPrincipal from './Components/DashboardPrincipal';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import {Container } from 'react-bootstrap';
import Login from './Components/Login';
import './App.css';

function App() {


  return (
    <Container>

      <BrowserRouter>
        <Routes>

          <Route path='/Login' element={<Login/>}/>
          <Route path='/Dashboard' element={<DashboardPrincipal/>}/>
          <Route path='*' element={<h1 className='text-center text-danger'>404 Not Found</h1>}/>
        
        </Routes>
      </BrowserRouter>

    </Container>
  );
}

export default App;
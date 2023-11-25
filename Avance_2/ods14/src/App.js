import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' /* Para conectar las paginas */
import Inicio from './pages/inicio';
import Login from './pages/login';
import Registro from './pages/registro';
import PaginaUsuario from './pages/paginaUsuario';
import PaginaAdmin from './pages/paginaAdmin';
import Biblioteca from './pages/biblioteca';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/registro' element={<Registro />} />
          <Route exact path='/paginaUsuario' element={<PaginaUsuario />} />
          <Route exact path='/paginaAdmin' element={<PaginaAdmin />} />
          <Route exact path='/biblioteca' element={<Biblioteca />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; /* Para conectar las paginas */
import Inicio from './pages/inicio';
import Login from './pages/login';
import Registro from './pages/registro';
import PaginaUsuario from './pages/paginaUsuario';
import PaginaAdmin from './pages/paginaAdmin';
import Biblioteca from './pages/biblioteca';
import ProtectedRoute from './components/protectedRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Inicio />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/registro' element={<Registro />} />
          <Route exact path='/paginaUsuario' element={<ProtectedRoute><PaginaUsuario /></ProtectedRoute>} />
          <Route exact path='/paginaAdmin' element={<ProtectedRoute><PaginaAdmin /></ProtectedRoute>} />
          <Route exact path='/biblioteca' element={<ProtectedRoute><Biblioteca /></ProtectedRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

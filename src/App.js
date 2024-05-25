
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>

          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Products />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update' element={<UpdateProduct />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

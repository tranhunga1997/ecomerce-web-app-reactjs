import { Route, Routes } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import './App.css';
import AddProduct from './page/AddProduct';
import LandingPage from './page/LandingPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import Main from './page/Main';
import ProductPage from './page/ProductPage';
import NotFound from './components/NotFound';
import CartPage from './page/CartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />}>
          <Route path='/' element={<LandingPage />} />
          <Route path='products' element={<ProductPage />} />
          <Route path='product/add' element={<AddProduct />} />
          <Route path='product/cart' element={<CartPage />} />
          <Route path='user/login' element={<LoginPage />} />
          <Route path='user/register' element={<RegisterPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

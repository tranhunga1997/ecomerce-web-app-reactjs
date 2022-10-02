import { Route, Routes } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';
import './App.css';
import AddProduct from './page/AddProduct';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';
import Main from './page/Main';
import ProductPage from './page/ProductPage';
import NotFound from './components/NotFound';
import CartPage from './page/CartPage';
import ForgetPwdPage from './page/ForgetPwdPage';
import ChangePwdPage from './page/ChangePwdPage';
import ProductDetailPage from './page/ProductDetailPage';
import ProfilePage from './page/ProfilePage';
import FormikDemo from './page/FormikDemo';
import UserList from './page/UserList';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';

const LandingPage = lazy(() => import('./page/LandingPage'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Main />}>
            <Route path='/' element={<LandingPage />} />
            <Route path='products' element={<ProductPage />} />
            <Route path='product/detail/:productName' element={<ProductDetailPage />} />
            <Route path='product/add' element={<AddProduct />} />
            <Route path='product/cart' element={<CartPage />} />
            <Route path='users' element={<UserList />} />
            <Route path='user/login' element={<LoginPage />} />
            <Route path='user/profile' element={<ProfilePage />} />
            <Route path='user/register' element={<RegisterPage />} />
            <Route path='user/change-password' element={<ChangePwdPage />} />
            <Route path='user/forget-password' element={<ForgetPwdPage />} />
            <Route path='*' element={<NotFound />} />

            <Route path='/formik' element={<FormikDemo />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

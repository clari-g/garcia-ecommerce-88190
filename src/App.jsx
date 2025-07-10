import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje='¡Bienvenido a tu tienda favorita!' />} />
          <Route path='/category/:categoryId' element={<ItemListContainer mensaje='¡Bienvenido a tu tienda favorita!' />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer mensaje='¡Bienvenido a tu tienda favorita!' />} />
        <Route path='/category/:categoryId' element={<ItemListContainer mensaje='¡Bienvenido a tu tienda favorita!' />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App

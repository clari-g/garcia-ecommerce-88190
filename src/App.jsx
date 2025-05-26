import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.scss'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje='¡Bienvenido a tu tienda favorita!' />
    </>
  )
}

export default App

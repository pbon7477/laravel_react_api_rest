import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowProductos from './components/ShowProductos';
import ShowProducto from './components/ShowProducto';
import CrearProducto from './components/CrearProducto';
import EditProducto from './components/EditProducto';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowProductos />}></Route>
        <Route path='/create' element={<CrearProducto />}></Route>
	<Route path='/show/:id' element={<ShowProducto />} ></Route>
        <Route path='/edit/:id' element={<EditProducto />}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;

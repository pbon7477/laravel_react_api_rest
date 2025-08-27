import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

const endpoint = 'http://localhost:8000/api/productos';

const CrearProducto = () => {

  const [descripcion, setDescripcion]=useState('');
  const [precio, setPrecio]=useState(0);
  const [stock, setStock]=useState(0);
  const navigate = useNavigate();

  const store = async (e)=>{
    e.preventDefault();
    await axios.post(endpoint,{ descripcion:descripcion, precio:precio, stock: stock });
    navigate('/');
  }


const cancelar = ()=>{
	navigate('/');	
}

  return (
    <div className="container">
      <div className='row'>
        <div className="col-md-4">

          <h3>Crear Producto</h3>
          <form onSubmit={store}>
            <div class="form-group">
              <label className='form-label'>Descripción</label>
              <input type="text" className="form-control" value={ descripcion } onChange={ (e)=>setDescripcion( e.target.value ) } required />
            </div>
            <div class="form-group">
              <label className='form-label'>Precio</label>
              <input type="number" className="form-control" value={ precio } onChange={ (e)=>setPrecio( e.target.value ) } required />
            </div>
            <div class="form-group">
              <label className='form-label'>Stock</label>
              <input type="number" className="form-control" value={ stock } onChange={ (e)=>setStock( e.target.value ) } required />
            </div>
            <br />

            <div class="form-group">
              <button class="btn btn-primary me-1" type='submit' >Guardar</button>
              <button class="btn btn-secondary" onClick={cancelar} >Cancelar</button>
            </div>
          
          </form>


        </div>
      </div>
    </div>
  )
}

export default CrearProducto;

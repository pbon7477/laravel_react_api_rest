import React from 'react'
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const endpoint = 'http://127.0.0.1:8000/api/productos/';

const EditProducto = () => {

const [descripcion, setDescripcion]=useState('');
const [precio, setPrecio]=useState(0);
const [stock, setStock]=useState(0);
const navigate = useNavigate();
const {id}= useParams();

const update = async (e)=>{
        e.preventDefault();
	await axios.put( `${endpoint}${id}`, {descripcion:descripcion, precio:precio, stock:stock} );
	
console.log('..aqui los test de los estados...↓')
console.log(descripcion);
	console.log(precio);
        console.log(stock);
	
	navigate('/');
}

useEffect( ()=>{

     const getProductById = async ()=>{
	const response = await axios.get( `${endpoint}${id}`);  
	setDescripcion(response.data.descripcion );
  	setPrecio(response.data.precio);
	setStock(response.data.stock);
	console.log(response)
     }	

     getProductById();	
	
},[] );



const cancelar = ()=>{
	navigate('/');	
}

 


  return (
    <div className="container">
      <div className='row'>
        <div className="col-md-12 border">

          <h3>Editar Producto ({id})</h3>

	  <div className="row">
	
            <div className="col-md-6">
		
          <form onSubmit={update} >
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

            <div class="form-group ">
              <button class="btn btn-primary me-1" type='submit' >Actualizar</button>
              <button class="btn btn-secondary" onClick={cancelar} >Cancelar</button>
            </div>
          
          </form>

            </div>	
	  </div>

        </div>
      </div>
    </div>
  )
}

export default EditProducto;

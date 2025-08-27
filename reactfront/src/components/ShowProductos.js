import React,{useState, useEffect} from 'react'
import  axios  from 'axios';
import { Link } from 'react-router-dom';

//const endpoint = 'http://localhost:8000/api';
const endpoint = 'http://127.0.0.1:8000/api';

const ShowProductos = () => {

const [productos,setProductos]=useState([]);

useEffect( ()=>{
    getAllProductos();
},[] );


const getAllProductos =  async ()=>{
    const response = await axios.get(`${endpoint}/productos`);
    setProductos( response.data );
    //console.log(response);
}





const deleteProductos =  async (id)=>{	
	
    await axios.delete(`${endpoint}/productos/${id}`);
    getAllProductos();
}



  return (
    <div className="container">

      <div className="row">
       <div className="col-md-12 text-center border">
		
        <div className='border my-1 px-1 d-flex justify-content-between align-items-center'>
	<h3>Productos</h3>
         <Link to='/create' className='btn btn-sm btn-outline-primary my-2' >Crear producto</Link>        
        </div>

       <table className='table  table-hover border'>
          <thead className='bg-primary text-white'>
            <tr>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
            </tr>


        </thead>
        <tbody>
            { productos.map( (prod)=> (
                <tr key={ prod.id }>
                    <td>{prod.descripcion}</td>
                    <td>${prod.precio}</td>
                    <td>{prod.stock}</td>
                    <td className="d-flex gap-2 justify-content-end">
                        <Link to={`/show/${prod.id}`}  className='btn btn-success btn-sm' >Detalle</Link>
			<Link to={`/edit/${prod.id}`}  className='btn btn-warning btn-sm' >Editar</Link>
                        <button  onClick={ ()=>deleteProductos( prod.id ) } className='btn btn-danger btn-sm'>Eliminar</button>
                    </td>
                </tr>
            )  )  }
        </tbody>


    </table>

       </div>
      </div>
    </div>
  )
}

export default ShowProductos;

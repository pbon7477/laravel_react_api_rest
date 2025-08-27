import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const endpoint = 'http://127.0.0.1:8000/api/productos/';


const ShowProducto = ()=>{

const [descripcion,setDescripcion]=useState('');
const [precio, setPrecio]=useState(0);
const [stock, setStock]=useState(0);
const navegate= useNavigate();
const {id} = useParams();


useEffect(()=>{
	const getProducto = async ()=>{
	const response = await axios.get(`${endpoint}${id}`);
	setDescripcion(response.data.descripcion);
	setPrecio(response.data.precio);
	setStock(response.data.stock);
	}

	getProducto();

},[]);



const cancelar = ()=>{
	navegate('/');
}

return (
	<div className="container">
		<div className="row">
		  <div className="col-md-6 border  table-response">
	            <table className="table table-hover border">
			<thead>
			  <tr>
		            <th colspan="2"><h4>Detalle de producto:</h4></th>		
                          </tr>
			</thead>
			<tbody>
			<tr>
			 <th>Descripción:</th>
			 <td>{descripcion}</td>		
                        </tr>
			<tr>
			 <th>Precio:</th>
			 <td>${precio}</td>		
                        </tr>
			<tr>
			 <th>Stock:</th>
			 <td>{stock}</td>		
                        </tr>
			</tbody>
		    </table>
		    <div>	
		      <button className="btn btn-secondary m-1" onClick={cancelar} >Volver</button>	
		    </div>		 		
                  </div>	
                </div>
        </div>

)

}

export default ShowProducto;
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller {

    public function index()    {

            $productos = Producto::all();
            return $productos;
        
    }

    
    public function store(Request $request)    {
       
        $producto = new Producto();
        $producto->descripcion = $request->descripcion;
        $producto->precio = $request->precio;
        $producto->stock = $request->stock;
        $producto->save();
        
        return $producto;
    }

    
    public function show(string $id)    {
        $producto = Producto::find($id);
        return $producto;
    }

   
    public function update(Request $request, string $id)    {       
        $producto = Producto::findOrFail($id);
        $producto->descripcion = $request->descripcion;
        $producto->precio = $request->precio;
        $producto->stock = $request->stock;
        $producto->save();
        return $producto;
    }

    public function destroy(string $id)    {
        $producto = Producto::destroy($id);       

        return response()->json(['message'=>'El producto ha sido eliminado exitosamente']);
      
    }
}

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductoController;

// Rutas RESTful para productos
Route::get('productos', [ProductoController::class, 'index'])->name('api.productos.index');
Route::post('productos', [ProductoController::class, 'store'])->name('api.productos.store');
Route::get('productos/{id}', [ProductoController::class, 'show'])->name('api.productos.show');
Route::put('productos/{id}', [ProductoController::class, 'update'])->name('api.productos.update');
Route::delete('productos/{id}', [ProductoController::class, 'destroy'])->name('api.productos.destroy');
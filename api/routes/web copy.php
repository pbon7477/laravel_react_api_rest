<?php

use App\Models\Producto;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';


/* Route::get('/productos','index');
        Route::post('/productos','store');
        Route::get('/productos/{id}','show');
        Route::put('/productos/{id}','update');
        Route::delete('/productos/{id}','destroy'); */

//api productos 
/* Route::get('/api/productos/',[App\Http\Controllers\Api\ProductoController::class,'index'])
->name('api.productos.index');

 Route::post('/api/productos/',[App\Http\Controllers\Api\ProductoController::class,'store'])
 ->name('api.productos.store');

 Route::get('/api/productos/{id}',[App\http\Controllers\Api\ProductoController::class,'show'])
 ->name('api.productos.show');

 Route::put('/api/productos/{id}',[App\Http\Controllers\Api\ProductoController::class,'update'])
 ->name('api.productos.update');

 Route::delete('/api/productos/{id}',[App\http\Controllers\Api\ProductoController::class,'destroy'])
 ->name('api.productos.destroy'); */
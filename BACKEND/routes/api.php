<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::prefix('auth')->group(function () {
    Route::post('/register/{role}', [AuthController::class, 'register']); // role = owners/veterinarians/animalshelters
    Route::post('/login/{role}', [AuthController::class, 'login']);       // role = owners/veterinarians/animalshelters
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});
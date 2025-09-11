<?php

use App\Http\Controllers\AdoptionListingsController;
use App\Http\Controllers\AppointmentsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HealthrecordsController;
use App\Http\Controllers\PetsController;
use App\Http\Controllers\VeterinariansController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::prefix('auth')->group(function () {
    Route::post('/register/{role}', [AuthController::class, 'register']); // role = owners/veterinarians/animalshelters
    Route::post('/login/{role}', [AuthController::class, 'login']);       // role = o   wners/veterinarians/animalshelters
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('adoptionlistings', AdoptionListingsController::class);
    Route::apiResource('pets', PetsController::class);
    Route::apiResource('healthrecords', HealthrecordsController::class);
    Route::apiResource('appointments', AppointmentsController::class);
    Route::get('veterinarians', [VeterinariansController::class, 'index']); 
});

<?php

namespace App\Http\Controllers;

use App\Models\Veterinarians;
use Illuminate\Http\Request;

class VeterinariansController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vets = Veterinarians::all(['vet_id', 'name', 'email', 'address', 'img_url', 'phonenumber', 'note']);
        return response()->json($vets);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Veterinarians $veterinarians)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Veterinarians $veterinarians)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Veterinarians $veterinarians)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Veterinarians $veterinarians)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Adoptionlistings;
use Illuminate\Http\Request;

class AdoptionlistingsController extends Controller
{
    public function index()
    {
        return Adoptionlistings::all();
    }

    public function show($id)
    {
        return Adoptionlistings::findOrFail($id);
    }
}

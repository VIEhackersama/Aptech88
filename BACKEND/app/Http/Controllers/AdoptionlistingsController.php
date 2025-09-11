<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdoptionListings;
use Illuminate\Support\Facades\Auth;

class AdoptionListingsController extends Controller
{
    public function index()
    {
        $listings = AdoptionListings::all();
        return response()->json($listings);
    }

    public function show($id)
    {
        $listing = AdoptionListings::findOrFail($id);
        return response()->json($listing);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        if (!($user instanceof \App\Models\Animalshelters)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $request->validate([
            'pet_name' => 'required|string|max:100',
            'species' => 'required|string|max:50',
            'breed' => 'nullable|string|max:50',
            'age' => 'required|integer',
            'gender' => 'required|string|max:20',
            'img_url' => 'nullable|string|max:255',
        ]);

        $listing = AdoptionListings::create([
            'shelter_id' => $user->shelter_id,
            'pet_name' => $request->pet_name,
            'species' => $request->species,
            'breed' => $request->breed,
            'age' => $request->age,
            'gender' => $request->gender,
            'img_url' => $request->img_url,
        ]);

        return response()->json($listing, 201);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $listing = AdoptionListings::findOrFail($id);

        if (!($user instanceof \App\Models\Animalshelters) || $listing->shelter_id !== $user->shelter_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $listing->update($request->only(['pet_name', 'species', 'breed', 'age', 'gender', 'img_url']));
        return response()->json($listing);
    }

    public function destroy($id)
    {
        $user = Auth::user();
        $listing = AdoptionListings::findOrFail($id);

        if (!($user instanceof \App\Models\Animalshelters) || $listing->shelter_id !== $user->shelter_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $listing->delete();
        return response()->json(['message' => 'Listing deleted']);
    }
}

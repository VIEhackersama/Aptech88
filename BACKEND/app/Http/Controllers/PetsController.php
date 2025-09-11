<?php

namespace App\Http\Controllers;

use App\Models\Pets;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PetsController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user instanceof \App\Models\Owners) {

            $pets = Pets::where('owner_id', $user->owner_id)->get();
        } elseif ($user instanceof \App\Models\Veterinarians) {
            $pets = Pets::all();
        } else {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json($pets);
    }

    public function show($id)
    {
        $user = Auth::user();
        $pet = Pets::findOrFail($id);

        if ($user instanceof \App\Models\Owners && $pet->owner_id !== $user->owner_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json($pet);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        if (!($user instanceof \App\Models\Owners)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $request->validate([
            'name' => 'required|string|max:100',
            'species' => 'required|string|max:50',
            'breed' => 'required|string|max:50',
            'age' => 'required|integer',
            'gender' => 'required|string|max:20',
            'img_url' => 'nullable|string|max:255',
        ]);

        $pet = Pets::create([
            'owner_id' => $user->owner_id,
            'name' => $request->name,
            'species' => $request->species,
            'breed' => $request->breed,
            'age' => $request->age,
            'gender' => $request->gender,
            'img_url' => $request->img_url,
        ]);

        return response()->json($pet, 201);
    }

    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $pet = Pets::findOrFail($id);

        if (!($user instanceof \App\Models\Owners) || $pet->owner_id !== $user->owner_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $pet->update($request->only(['name', 'species', 'breed', 'age', 'gender', 'img_url']));
        return response()->json($pet);
    }

    public function destroy($id)
    {
        $user = Auth::user();
        $pet = Pets::findOrFail($id);

        if (!($user instanceof \App\Models\Owners) || $pet->owner_id !== $user->owner_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $pet->delete();
        return response()->json(['message' => 'Pet deleted']);
    }
}

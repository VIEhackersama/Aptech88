<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Owners;
use App\Models\Veterinarians;
use App\Models\AnimalShelters;

class AuthController extends Controller
{
    public function register(Request $request, $role)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|unique:' . $role . ',email',
            'password' => 'required|string|min:6',
            'address' => 'nullable|string|max:255',
            'phonenumber' => 'nullable|string|max:20',
            'img_url' => 'nullable|string|max:255',
        ]);

        switch ($role) {
            case 'owners':
                $user = Owners::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password_hash' => Hash::make($request->password),
                    'address' => $request->address,
                    'phonenumber' => $request->phonenumber,
                    'img_url' => $request->img_url,
                ]);
                break;
            case 'veterinarians':
                $user = Veterinarians::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password_hash' => Hash::make($request->password),
                    'address' => $request->address,
                    'phonenumber' => $request->phonenumber,
                    'img_url' => $request->img_url,
                ]);
                break;
            case 'animalshelters':
                $user = AnimalShelters::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password_hash' => Hash::make($request->password),
                    'address' => $request->address,
                    'phonenumber' => $request->phonenumber,
                    'img_url' => $request->img_url,
                ]);
                break;
            default:
                return response()->json(['error' => 'Invalid role'], 400);
        }

        return response()->json([
            'message' => ucfirst($role) . ' registered successfully',
            'user' => $user
        ], 201);
    }

    public function login(Request $request, $role)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        switch ($role) {
            case 'owners':
                $user = Owners::where('email', $request->email)->first();
                break;
            case 'veterinarians':
                $user = Veterinarians::where('email', $request->email)->first();
                break;
            case 'animalshelters':
                $user = AnimalShelters::where('email', $request->email)->first();
                break;
            default:
                return response()->json(['error' => 'Invalid role'], 400);
        }

        if (!$user || !Hash::check($request->password, $user->password_hash)) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken($role . '-token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'role' => $role,
            'token' => $token
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Appointments;

class AppointmentsController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        if ($user instanceof \App\Models\Owners) {
            $appointments = Appointments::where('owner_id', $user->owner_id)
                ->with(['pet', 'veterinarian'])
                ->get();
        } elseif ($user instanceof \App\Models\Veterinarians) {
            $appointments = Appointments::where('vet_id', $user->vet_id)
                ->with(['pet', 'owner'])
                ->get();
        } else {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json($appointments);
    }

    // POST /appointments (chỉ owner)
    public function store(Request $request)
    {
        $user = Auth::user();

        if (!($user instanceof \App\Models\Owners)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $request->validate([
            'pet_id' => 'required|exists:pets,pet_id',
            'vet_id' => 'required|exists:veterinarians,vet_id',
            'appointment_time' => 'required|date',
        ]);

        $appt = Appointments::create([
            'pet_id' => $request->pet_id,
            'owner_id' => $user->owner_id,
            'vet_id' => $request->vet_id,
            'appointment_time' => $request->appointment_time,
            'status' => 'Pending',
        ]);

        return response()->json($appt, 201);
    }

    // PUT /appointments/{id}
    public function update(Request $request, $id)
    {
        $user = Auth::user();
        $appt = Appointments::findOrFail($id);

        if ($user instanceof \App\Models\Owners && $appt->owner_id === $user->owner_id) {
            // Owner chỉ có thể hủy
            $appt->update(['status' => 'Cancelled']);
        } elseif ($user instanceof \App\Models\Veterinarians && $appt->vet_id === $user->vet_id) {
            // Vet có thể cập nhật trạng thái
            $appt->update($request->only(['status']));
        } else {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        return response()->json($appt);
    }
}

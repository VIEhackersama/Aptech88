<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\HealthRecords;

class HealthrecordsController extends Controller
{
    // GET /healthrecords (vet chỉ xem record của mình)
    public function index()
    {
        $user = Auth::user();

        if (!($user instanceof \App\Models\Veterinarians)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $records = HealthRecords::where('vet_id', $user->vet_id)
            ->with('pet')
            ->get();

        return response()->json($records);
    }

    // POST /healthrecords (vet thêm record mới)
    public function store(Request $request)
    {
        $user = Auth::user();

        if (!($user instanceof \App\Models\Veterinarians)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $request->validate([
            'pet_id' => 'required|exists:pets,pet_id',
            'visit_date' => 'required|date',
            'diagnosis' => 'required|string|max:255',
            'treatment' => 'nullable|string|max:255',
        ]);

        $record = HealthRecords::create([
            'pet_id' => $request->pet_id,
            'vet_id' => $user->vet_id,
            'visit_date' => $request->visit_date,
            'diagnosis' => $request->diagnosis,
            'treatment' => $request->treatment,
        ]);

        return response()->json($record, 201);
    }

    // PUT /healthrecords/{id} (vet chỉ được sửa record của mình)
    public function update(Request $request, $id)
    {
        $user = Auth::user();

        if (!($user instanceof \App\Models\Veterinarians)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $record = HealthRecords::findOrFail($id);

        if ($record->vet_id !== $user->vet_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $record->update($request->only(['diagnosis', 'treatment', 'visit_date']));

        return response()->json($record);
    }

    // DELETE /healthrecords/{id} (vet chỉ được xóa record của mình)
    public function destroy($id)
    {
        $user = Auth::user();

        if (!($user instanceof \App\Models\Veterinarians)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $record = HealthRecords::findOrFail($id);

        if ($record->vet_id !== $user->vet_id) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $record->delete();

        return response()->json(['message' => 'Record deleted successfully']);
    }
}

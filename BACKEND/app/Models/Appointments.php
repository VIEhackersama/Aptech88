<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointments extends Model
{
    use HasFactory;

    protected $primaryKey = 'appt_id';

    protected $fillable = [
        'pet_id',
        'owner_id',
        'vet_id',
        'appointment_time',
        'status',
    ];

    protected $casts = [
        'appointment_time' => 'datetime',
    ];

    public function pets()
    {
        return $this->belongsTo(Pets::class, 'pet_id', 'pet_id');
    }

    public function owners()
    {
        return $this->belongsTo(Owners::class, 'owner_id', 'owner_id');
    }

    public function veterinarians()
    {
        return $this->belongsTo(Veterinarians::class, 'vet_id', 'vet_id');
    }
}

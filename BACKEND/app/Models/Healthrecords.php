<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Healthrecords extends Model
{
    protected $primaryKey = 'record_id';
    protected $fillable = [
        'pet_id',
        'vet_id',
        'visit_date',
        'diagnosis',
        'treatment',
    ];
    public function veterinarians(): BelongsTo
    {
        return $this->belongsTo(Veterinarians::class, 'vet_id', 'vet_id');
    }
    public function pets(): BelongsTo
    {
        return $this->belongsTo(Pets::class, 'pet_id', 'pet_id');
    }

}

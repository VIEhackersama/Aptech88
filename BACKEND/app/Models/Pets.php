<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pets extends Model
{
    use HasFactory;
    protected $primaryKey = 'pet_id';
    protected $fillable = [
        'owner_id',
        'name',
        'species',
        'breed',
        'age',
        'gender',
        'img_url'
    ];
    public function healthrecords()
    {
        return $this->hasMany(Healthrecords::class, 'pet_id', 'pet_id');
    }
    public function owners(): BelongsTo
    {
        return $this->belongsTo(Owners::class, 'owner_id', 'owner_id');
    }
    public function appointments()
    {
        return $this->hasMany(Appointments::class, 'pet_id', 'pet_id');
    }
}

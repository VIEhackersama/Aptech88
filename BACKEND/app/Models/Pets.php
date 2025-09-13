<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pets extends Authenticatable
{
    use HasFactory, HasApiTokens;
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

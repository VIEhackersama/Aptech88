<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Owners extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $primaryKey = 'owner_id';

    protected $fillable = [
        'name',
        'email',
        'password_hash',
        'address',
        'img_url',
        'phonenumber',
    ];

    protected $hidden = [
        'password_hash',
        'remember_token', 
    ];

    public function setPasswordHashAttribute($value)
    {
        $this->attributes['password_hash'] = Hash::make($value);
    }

    public function pets()
    {
        return $this->hasMany(Pets::class, 'owner_id', 'owner_id');
    }

    public function appointments()
    {
        return $this->hasMany(Appointments::class, 'owner_id', 'owner_id');
    }
}

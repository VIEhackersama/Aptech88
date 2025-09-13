<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Veterinarians extends Authenticatable
{
    use HasFactory,HasApiTokens,Notifiable;
    protected $primaryKey = 'vet_id';
    protected $fillable = [
        'name',
        'email',
        'password_hash',
        'address',
        'note',
        'img_url',
        'phonenumber'
    ];  
    protected $hidden = [
        'password_hash',
        'remember_token'
    ];
    public function setPasswordHashAttribute($value)
    {
        $this->attributes['password_hash'] = Hash::make($value);
    }
    public function healthrecords()
    {
        return $this->hasMany(Healthrecords::class, 'vet_id', 'vet_id');
    }
    public function appointments()
    {
        return $this->hasMany(Appointments::class, 'vet_id', 'vet_id');
    }
}

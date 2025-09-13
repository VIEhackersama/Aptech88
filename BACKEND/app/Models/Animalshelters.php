<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Animalshelters extends Authenticatable
{
    use HasFactory,HasApiTokens,Notifiable;
    protected $primaryKey = 'shelter_id';
    protected $fillable = [
        'name',
        'email',
        'password_hash',
        'address',
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
    public function adoptionlistings()
    {
        return $this->hasMany(Adoptionlistings::class, 'shelter_id', 'shelter_id');
    }
}

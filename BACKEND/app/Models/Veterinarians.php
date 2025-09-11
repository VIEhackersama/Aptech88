<?php

namespace App\Models;

use Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Veterinarians extends Model
{
    use HasFactory;
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
        'password_hash'
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

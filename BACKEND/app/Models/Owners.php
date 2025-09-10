<?php

namespace App\Models;

use Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Owners extends Model
{
    use HasFactory;
    protected $primaryKey='owner_id';
    protected $fillable=[
        'name',
        'email',
        'password_hash',
        'address',
        'img_url',
        'phonenumber'
    ];
    protected $hidden=[
        'password_hash'
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

<?php

namespace App\Models;

use Hash;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animalshelters extends Model
{
    use HasFactory;
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
        'password_hash'
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

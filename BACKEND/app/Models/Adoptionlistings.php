<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Adoptionlistings extends Model
{
    use HasFactory;
    protected $primaryKey='listing_id';
    protected $fillable = [
        'shelter_id',
        'pet_name',
        'species',
        'breed',
        'age',
        'status',
        'img_url',
    ];
    public function animalshelters():BelongsTo
    {
        return $this->belongsTo(Animalshelters::class,'shelter_id','shelter_id');
    }
}

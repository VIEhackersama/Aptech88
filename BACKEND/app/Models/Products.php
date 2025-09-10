<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $primaryKey = 'product_id';
    protected $fillable = [
        'name',
        'category',
        'price',
        'description',
        'stock_quantity',
        'img_url'
    ];
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('adoptionlistings', function (Blueprint $table) {
            $table->id('listing_id');
            $table->unsignedBigInteger('shelter_id');
            $table->string('pet_name', 100);
            $table->string('species', 50);
            $table->string('breed', 50);
            $table->unsignedBigInteger('age');
            $table->string('gender', 20);
            $table->string('img_url', 255);
            $table->timestamps();
            $table->foreign(columns: 'shelter_id')->references('shelter_id')->on('animalshelters')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('adoptionlistings');
    }
};

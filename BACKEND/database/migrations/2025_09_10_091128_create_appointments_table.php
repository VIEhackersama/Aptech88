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
        Schema::create('appointments', function (Blueprint $table) {
            $table->id('appt_id');
            $table->unsignedBigInteger('pet_id');
            $table->unsignedBigInteger('owner_id');
            $table->unsignedBigInteger('vet_id');
            $table->dateTime('appointment_time');
            $table->string('status',50);
            $table->timestamps();
            $table->foreign('pet_id')->references('pet_id')->on('pets')->onDelete('cascade');
            $table->foreign('owner_id')->references('owner_id')->on('owners')->onDelete('cascade');
            $table->foreign('vet_id')->references('vet_id')->on('veterinarians')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('appointments');
    }
};

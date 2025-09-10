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
        Schema::create('animalshelters', function (Blueprint $table) {
            $table->id('shelter_id');
            $table->string('name');
            $table->string('email');
            $table->string('password_hash');
            $table->string('address');
            $table->string('img_url');
            $table->string('phonenumber');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('animalshelters');
    }
};

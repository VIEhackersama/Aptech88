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
        Schema::create('owners', function (Blueprint $table) {
            $table->id('owner_id');
            $table->string('name',100);
            $table->string('email',100);
            $table->string('password_hash', 255);
            $table->string('address', 255)->nullable();
            $table->string('img_url', 255)->nullable();
            $table->string('phonenumber', 20)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('owners');
    }
};

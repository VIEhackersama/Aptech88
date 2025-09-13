<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('pets', function (Blueprint $table) {
            $table->id('pet_id');
            $table->unsignedBigInteger('owner_id')->nullable();
            $table->string('name', 100)->nullable();
            $table->string('species', 50)->nullable();
            $table->string('breed', 50)->nullable();
            $table->integer('age')->nullable();
            $table->string('gender', 20)->nullable();
            $table->string('img_url', 255)->nullable();
            $table->timestamps();
            $table->foreign('owner_id')->references('owner_id')->on('owners')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('pets');
    }
};

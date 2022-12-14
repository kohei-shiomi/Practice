<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->Increments('id');
            $table->unsignedInteger('user_name')->comment('ユーザID');
            $table->string('text')->comment('内容');
            $table->softDeletes();
            $table->timestamps();

            $table->index('id');
            $table->index('user_name');
            $table->index('text');

            $table->foreign('user_name')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
}

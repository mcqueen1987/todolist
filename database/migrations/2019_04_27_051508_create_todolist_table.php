<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodolistTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todolist', function (Blueprint $table) {
		$table->bigIncrements('id');
		$table->char('title', 128);
		$table->datetime('finished_at')->nullable()->default(null);
		$table->dateTime('created_at')->default(\Carbon\Carbon::now()); 
		#$table->dateTime('created_at');
		#$table->dateTime('finished_at');
		$table->integer('status');	
		$table->bigInteger('creater_id');	
		$table->longText('task_content');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todolist');
    }
}

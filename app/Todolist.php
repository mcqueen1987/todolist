<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class Todolist extends Model
{
    protected $table = 'todolist';
    public $timestamps = false;

    /*
     * set default value of attribute
     */
    protected $attributes = [
        'task_content' => '',
    ];
}

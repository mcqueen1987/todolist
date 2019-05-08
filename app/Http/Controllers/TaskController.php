<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


/**
 * Verb	    Path	                Action	  Route Name
 * GET	    /user/:userId/task/	        index	  task.index    //get all tasks by userId
 * POST	    /user/:userId/task/	    	store	  task.store    //create task by userId
 * PATCH    /user/:uesrId/task/:taskId	update	  task.update   //update task by taskId
 * DELETE   /user/:userId/task/:taskId  destroy   task.destroy  //delete task by taskId
 * GET	    /user/:userId/task/:taskId	show	  task.show     //get task by taskId
 * 
 * Class Task
 * @package App\Http\Controllers
 */
class TaskController extends Controller
{

	/**
	 * Display a listing of the resource
	 *
	 * @return array
	 */
	public function index($userId)
	{	
		$taskList = \DB::select('select * from todolist where creater_id = ?', [$userId]);
		if($taskList){
			return response()->json(array('success' => true, 'data' => $taskList), 200);
		}else{
			return response()->json(array('success' => false, 'data' => $taskList), 500);
		}
		// return $taskList;
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param Request $request
	 * @return array
	 */
	public function store(Request $request)
	{
		$ret = \DB::table('todolist')->insert($request->all());
		if(!$ret){
			return response()->json(array('success' => false), 500);
		}else{
			return response()->json(array('success' => true, 'last_insert_id' => \DB::getPdo()->lastInsertId()), 200);
		} 
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param Request $request
	 * @param $id
	 * @return array
	 */
	public function update(Request $request, $userId, $taskId)
	{
		$ret = \DB::table('todolist')->where('id', $taskId)->update($request->all());
		return $ret;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param $taskId
	 * @return array
	 */
	public function destroy($userId, $taskId)
	{
		$ret = \DB::table("todolist")->where('id', $taskId)->delete();
		if(!$ret){
			return response()->json(array('success' => false), 500);
		}else{
			return response()->json(array('success' => true, 'deleted_task_id' => $taskId), 200);
		} 
	}

	/**
	 * Display the specified resource.
	 * 
	 * @param $id
	 * @return array
	 */
	public function show($id)
	{
		return [
			'name' => 'show',
			'id' => $id
		];
	}


}


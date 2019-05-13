<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Todolist;
use DB;


/**
 * Verb        Path                          Action      Route Name
 * GET        /user/:userId/task/            index       task.index    //get all tasks by userId
 * POST       /user/:userId/task/            store       task.store    //create task by userId
 * PATCH      /user/:uesrId/task/:taskId     update      task.update   //update task by taskId
 * DELETE     /user/:userId/task/:taskId     destroy     task.destroy  //delete task by taskId
 * GET        /user/:userId/task/:taskId     show        task.show     //get task by taskId
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
        $taskList = Todolist::where('creater_id', '=', $userId)->get();
        if ($taskList) {
            return response()->json(array('success' => true, 'data' => $taskList), 200);
        } else {
            return response()->json(array('success' => false, 'data' => $taskList), 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return array
     */
    public function store(Request $request)
    {
        $ret = Todolist::insert($request->all());
        if (!$ret) {
            return response()->json(array('success' => false), 500);
        } else {
            return response()->json(array('success' => true, 'last_insert_id' => DB::getPdo()->lastInsertId()), 200);
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
        $ret = Todolist::where('id', $taskId)->update($request->all());
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
        $ret = Todolist::where([
            ['id', $taskId],
            ['creater_id', $userId],
        ])->delete();
        if (!$ret) {
            return response()->json(array('success' => false), 500);
        } else {
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
        //
    }


}


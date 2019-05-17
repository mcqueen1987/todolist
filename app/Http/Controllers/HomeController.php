<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $this->middleware('auth');
        if (auth()->guest()){
            // login not required for a guest, may change in future
            return view('home');
        }else{
            return view('home');
        }
    }
}

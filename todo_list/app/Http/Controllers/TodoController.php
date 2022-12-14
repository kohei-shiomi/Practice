<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\todo;
use App\Models\User;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        $user = auth()->user();
        $cond_text = $request->cond_text;
      if ($cond_text != '') {
          
          $todo = todo::where('text', $cond_text)->get();
      } else {
          
          $todo = todo::orderBy('created_at', 'desc')->get();
      }
      return view('todo.index', [
        'todo' => $todo, 
        'user' => $user,
        'cond_text' => $cond_text
        ]);
  }
    

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        {   $user = auth()->user();

            return view('todo', [
                'user' => $user
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Todo $todo)
    {
        //
        $user = auth()->user();
        $data = $request->all();
        $validator = Validator::make($data, [
            'text' => ['required', 'string', 'max:140']
        ]);

        $validator->validate();
        $todo->todoStore($user->id, $data);

        return redirect('todo');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        //
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(todo $todo)
    {
        //
        $user = auth()->user();
        $todo->todoDestroy($user->id, $todo->id);

        return back();
    }
}

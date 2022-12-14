<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


// Route::group(['middleware' => 'auth'], function() {
//     Route::get('todo/create', 'TodoController@create');
// });



// ログイン状態
Route::group(['middleware' => 'auth'], function() {

    // ユーザ関連
    Route::resource('users', 'UsersController', ['only' => ['index', 'show', 'edit', 'update']]);


    // ツイート関連
    Route::resource('todo', 'TodoController', ['only' => ['index', 'create', 'store', 'show', 'edit', 'update', 'destroy']]);

});

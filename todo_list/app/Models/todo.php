<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Http\Controllers\TodoController;
use App\Models\User;

class todo extends Model
{
    use SoftDeletes;
    protected $guarded = array('id');

    
    public static $rules = array(
        'text' => 'required',
    );
    //
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'text'
    ];
    

    public function user()
    {
        
        return $this->belongsTo ('App\Models\User', 'user_name', 'id');
    
    }

    public function todoStore(Int $user_name, Array $data)
    {
        $this->user_name = $user_name;
        $this->text = $data['text'];
        $this->save();

        return;
    }

    public function todoDestroy(Int $user_name, Int $todo_id)
    {
        return $this->where('user_name', $user_name)->where('id', $todo_id)->delete();
    }

    
}

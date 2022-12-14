@extends('layouts.app')

@section('content')
    <div class="container ">
        <div class="row ">
            <div class="col-md-8 mx-auto">
                <form method="POST" action="{{ route('todo.store') }}">

                    @if (count($errors) > 0)
                        <ul>
                            @foreach($errors->all() as $e)
                                <li>{{ $e }}</li>
                            @endforeach
                        </ul>
                    @endif
                    
                    <div class="form-group row ">
                            <div class="col-md-10 mx-auto">
                            <textarea class="form-control " name="text" rows="5" placeholder="内容">{{ old('text') }}</textarea>
                        </div>
                    </div>
                    
                    {{ csrf_field() }}
                    <div class="mt-2 col-md-12 text-right">
                        <input type="submit" class="btn btn-primary mb-3 " value="追加">
                    </div>
                </form>
            </div>
        </div>

        <!-- <div class="form-group row">
                        
                        <div class="col-md-8 mb-2">
                            <input type="text" class="form-control" name="cond_text" value="{{ $cond_text }}">
                        </div>
                        <div class="col-md-2">
                            {{ csrf_field() }}
                            <input type="submit" class="btn btn-primary" value="検索">
                        </div>
                    </div> -->

        @if (isset($todo))
            @foreach ($todo as $todo)
                <div class="col-md-8 mb-3 mx-auto mt-2" >
                    <div class="card border border-warning " >
                        <div class="card-haeder p-2 d-flex bg-warning mb-0" style="height: 50px;">
                            
                            <div class="ml-2 d-flex flex-column ">
                                
                                <p class="font-weight-bold mt-1 h4">{{ $todo->user->user_name }}</p>
                            </div>
                            <div class="d-flex justify-content-end flex-grow-1">
                                <p class="mt-1 text-secondary">{{ $todo->created_at->format('Y-m-d H:i') }}</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="mr-2 p-2 d-flex flex-column "style="minimum-height: 30px;">
                                <p class="mb-0 font-weight-bold">内容</p>
                                <p>{!! nl2br(e($todo->text)) !!}</p>
                            </div>
                            
                            <form method="POST" action="{{ url('todo/' .$todo->id) }}" class="mb-0 text-right">
                                    @csrf
                                    @method('DELETE')
                                    <input type="submit" class="btn btn-outline-success" value="完了">
                            </form>
                            
                        </div>
                        
                        
                    </div>
                </div>
            @endforeach
        @endif
    </div>
@endsection
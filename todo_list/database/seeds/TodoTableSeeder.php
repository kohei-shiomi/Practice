<?php

use Illuminate\Database\Seeder;
use App\Models\todo;

class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for ($i = 1; $i <= 2; $i++) {
            todo::create([
                'user_name'    => $i,
                'text'       => 'これはテストtodo' .$i,
                'created_at' => now(),
                'updated_at' => now()
            ]);
    }
}
}
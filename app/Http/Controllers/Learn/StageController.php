<?php

namespace App\Http\Controllers\Learn;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class StageController extends Controller
{

    public function stage()
    {
        $data = ['stage' => Auth::user()->stage];
        return response()->json(['data'=> $data]);
    }

}

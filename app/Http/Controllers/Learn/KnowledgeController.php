<?php

namespace App\Http\Controllers\Learn;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;

class KnowledgeController extends Controller
{

    public function post(Request $request)
    {
        $user = Auth::user();
        if ($user->stage == 1) {
            $knowledge = $user->knowledge()->create($request->all());
            $user->stage = 2;
            $user->save();
            return response()->json(['data'=> ['knowledge' => $knowledge]], 201);
        } else {
            return response()->json(['message'=> 'Forbidden'], 403);
        }
    }

}

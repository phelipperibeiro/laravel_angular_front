<?php

use Illuminate\Http\Request;
use App\Service\RequestService; 

Route::get('/', function () {
    return view('app');
});

Route::post('/oauth/token', function (Request $request) {

    $data = array();    
    $data['form_params']['client_id'] = $request->get('client_id'); //1
    $data['form_params']['grant_type'] = $request->get('grant_type'); //password
    $data['form_params']['username'] = $request->get('username');
    $data['form_params']['password'] = $request->get('password');
    $data['form_params']['client_secret'] = env('API_CLIENT_SECRET'); // pegar do arquivo .env

    $url = 'oauth/token'; // pegar do arquivo .env
    
    
    $RequestService = new RequestService(env('API_URL_BASE'));
    
    dd($RequestService);
    
    
    return $RequestService->sendRequest('POST', $url, $data);
    
});

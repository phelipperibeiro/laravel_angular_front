<?php

use Illuminate\Http\Request;
use GuzzleHttp\Client;

Route::get('/', function () {
    return view('app');
});

Route::post('/oauth/token', function (Request $request) {

    $data = array();
    
    // $data['http_errors'] = false;
    
    $data['form_params']['client_id'] = $request->get('client_id'); //1
    $data['form_params']['grant_type'] = $request->get('grant_type'); //password
    $data['form_params']['username'] = $request->get('username');
    $data['form_params']['password'] = $request->get('password');
    $data['form_params']['client_secret'] = '4b2Ebj8AFb92tmxEYxZLhRUoqntMZNsawjGl1Uud'; // pegar do arquivo .env

    $urlApi = 'http://localhost:8000/oauth/token'; // pegar do arquivo .env
    $GuzzleHttp = new Client();

    $response = $GuzzleHttp->post($urlApi, $data);
    
    return $response->getBody()->getContents();
    
});

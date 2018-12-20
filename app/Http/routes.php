<?php

use Illuminate\Http\Request;


Route::get('/', function () {
    return view('app');
});

Route::post('/oauth/token', 'OauthController@oauth');

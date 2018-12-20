<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests;
use App\Service\OauthService;

class OauthController extends Controller
{

    /**
     *
     * @var OauthService 
     */
    private $service;

    public function __construct(OauthService $OauthService)
    {
        $this->service = $OauthService;
    }

    public function Oauth(Request $request)
    {   
        return $this->service->Oauth($request->all());
    }

}

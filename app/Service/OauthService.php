<?php

namespace App\Service;

use App\Service\RequestService;
use Illuminate\Validation\Factory;

class OauthService
{

    /**
     *
     * @var RequestService 
     */
    private $service;

    /**
     *
     * @var Validator 
     */
    private $validator;

    public function __construct(RequestService $RequestService, Factory $Validator)
    {
        $this->service = $RequestService;
        $this->validator = $Validator;
    }

    public function Oauth($data)
    {

        $messages = [
            'username.required' => 'login é obrigatório',
            'password.required' => 'senha é obrigatória'
        ];

        $validator = $this->validator->make($data, [
            'username' => 'required',
            'password' => 'required',
                ], $messages);

        if ($validator->fails()) {
            return [ 'error' => $validator->errors(), 'message' => $validator->errors()];
        }

        $requestData = array();
        $requestData['form_params']['username'] = $data['username'];
        $requestData['form_params']['password'] = $data['password'];
        $requestData['form_params']['client_id'] = env('API_CLIENT_ID');
        $requestData['form_params']['grant_type'] = env('API_GRANT_TYPE');
        $requestData['form_params']['client_secret'] = env('API_CLIENT_SECRET');
        
        return $this->service->sendRequest('POST', '/oauth/token', $requestData);
    }

}

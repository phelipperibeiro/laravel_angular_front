<?php

namespace App\Service;

use GuzzleHttp\Client;

class RequestService
{

    private $UrlBase;
    
    private $GuzzleHttp;    

    public function __construct($UrlBase, Client $GuzzleHttp)
    {
        $this->UrlBase = $UrlBase;
        
        $this->GuzzleHttp = $GuzzleHttp;
        
    }

    public function sendRequest($method = 'GET', $url, $data = array())
    {
        
        $data['debug'] = true;
        $data['otheroptions'] =  array();
        // $data['http_errors'] = false;
      
        echo '*<pre>';
        print_r([$method, $this->UrlBase.'/'.$url, $data]);exit;
        
        $response = $this->GuzzleHttp->request($method, $this->UrlBase.'/'.$url, $data);
        
        return $response->getBody()->getContents();
    }

}

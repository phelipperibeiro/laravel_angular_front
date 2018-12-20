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
        $data['debug'] = false;
        $data['http_errors'] = false;
        $data['otheroptions'] =  array();
                
        $response = $this->GuzzleHttp->request($method, $this->UrlBase.$url, $data); 
        
         
        if($response->getStatusCode() <> 200){
            abort($response->getStatusCode(), $response->getBody()->getContents()); 
        }
               
        return $response->getBody()->getContents(); 
    }

}

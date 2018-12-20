<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Service\RequestService;

class RequestServiceProvider extends ServiceProvider
{

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('App\Service\RequestService', function($app) {
            return new RequestService(
                    $app->make('config')->get('app.external_api'),
                    $app->make('GuzzleHttp\Client')
                    );
        });
    }

}

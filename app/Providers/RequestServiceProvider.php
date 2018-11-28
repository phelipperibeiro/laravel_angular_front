<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

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
        $this->app->bind('App\Service\RequestService', function($app) {
            return new App\Service\RequestService(
                    $app->make('config')->get('app.external_api'),
                    $app->make('GuzzleHttp\Client')
                    );
        });
    }

}

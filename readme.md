## Instalação da front

1-) clonar projeto https://github.com/phelipperibeiro/laravel_angular_front.git

2-) rodar o comando: cp .env.example .env	 
 
3-) rodar o comando: php artisan key:generate 

4-) rodar o comando: composer install (gerenciador de dependencia do php, composer.json)

5-) rodar o comnado: npm install (gerenciador de dependencia do nodeJS, package.json)

6-) (caso nao tenha instalado) instalar bower com o comando: npm install -g bower (-g global)

7-) rodar o comando: bower install (gerenciador de dependecia JS, bower.json)
    obs: lembrando que o arquivo (.bowerrc) contem o path do diretorio que guarda as dependecias instaladas pelo bower

8-) (caso nao tenha instalado) instalar bower com os comandos:
     npm install gulp-cli -g (-g global)
     npm install gulp -D
     touch gulpfile.js
     gulp --help

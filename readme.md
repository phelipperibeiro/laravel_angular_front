# Instalação da front

###### 1-) clonar projeto https://github.com/phelipperibeiro/laravel_angular_front.git

###### 2-) rodar o comando `cp .env.example .env`
obs: colocar as devidas configuracoes no arquivo.

###### 3-) rodar o comando `php artisan key:generate`

###### 4-) rodar o comando `composer install` (gerenciador de dependencia do php, composer.json).

###### 5-) (caso nao tenha instalado nodeJS) instalar o mesmo com as intrucoes abaixo

5.1 -) `wget https://nodejs.org/dist/v10.13.0/node-v10.13.0-linux-x64.tar.xz` <br> 
(consultar versao mais recente https://nodejs.org/en/download/) <br>

5.2 -) descompactar e instalar `tar -C /usr/local --strip-components 1 -xJf node-v10.13.0-linux-x64.tar.xz`

obs: caso ainda tenha duvidas segue o link de exemplo para instalcao do nodeJS.
https://microbuffer.wordpress.com/2017/10/03/instalar-nodejs-en-linux-ubuntu-debian-centos-usando-paquetes-binarios/ 

###### 6-) rodar o comnado `npm install` (gerenciador de dependencia do nodeJS, package.json).

###### 7-) (caso nao tenha instalado) instalar bower com o comando `npm install -g bower` (-g global)

###### 8-) rodar o comando: `bower install` (gerenciador de dependecia JS, bower.json)
obs: lembrando que o arquivo (.bowerrc) contem o path do diretorio que guarda as dependecias instaladas pelo bower

###### 9-) (caso nao tenha instalado) instalar gulp com os comandos
`npm install gulp-cli -g` (-g global) <br>
`npm install gulp -D` <br>
`touch gulpfile.js` <br>
`gulp --help` <br>

obs: caso ainda tenha duvidas segue o link de exemplo para instalcao do gulp. <br>
https://gulpjs.com/ <br>




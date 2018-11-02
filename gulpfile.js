var elixir = require('laravel-elixir'),
    liveReload = require('gulp-livereload'),
    clean = require('rimraf'),
    gulp = require('gulp');
    
var config = {
    assets_path: "./resources/assets",
    build_path: "./public/build",
    bower_path: "./resources/bower_components",
    build_path_js: "./public/build/js",
    build_vendor_path_js: "./public/build/js/vendor",
    build_path_css: "./public/build/css",
    build_vendor_path_css: "./public/build/css/vendor",
    build_path_html: "./public/build/views"
};

config.vendor_path_css = [
    config.bower_path + '/bootstrap/dist/css/bootstrap.min.css',
    config.bower_path + '/bootstrap/dist/css/bootstrap-theme.min.css',
];

config.vendor_path_js = [
    config.bower_path + '/jquery/dist/jquery.min.js',
    config.bower_path + '/bootstrap/dist/js/bootstrap.min.js',
    config.bower_path + '/angular/angular.min.js',
    config.bower_path + '/angular-route/angular-route.min.js',
    config.bower_path + '/angular-resource/angular-resource.min.js',
    config.bower_path + '/angular-animate/angular-animate.min.js',
    config.bower_path + '/angular-messages/angular-messages.min.js',
    config.bower_path + '/angular-bootstrap/ui-bootstrap.min.js',
    config.bower_path + '/angular-strap/dist/modules/navbar.min.js',
    config.bower_path + '/angular-messages/angular-messages.min.js',
    config.bower_path + '/angular-cookies/angular-cookies.min.js',
    config.bower_path + '/query-string/query-string.js',
    config.bower_path + '/angular-oauth2/dist/angular-oauth2.min.js',
];


gulp.task('copy-styles', function(){
    
    gulp.src([config.assets_path + '/css/**/*.css']) //obs: /**/ todos os diretorios
      .pipe(gulp.dest(config.build_path_css)) // (pipe: tarefa) copiando todos os arquivos de gulp.src(resources_path) para o gulp.dest(public_path)
      .pipe(liveReload()); // (pipe: tarefa) notifica o bash com o liveReload()

    gulp.src(config.vendor_path_css) // css de terceiros
      .pipe(gulp.dest(config.build_vendor_path_css))
      .pipe(liveReload());
});

gulp.task('copy-html', function(){
    
   gulp.src([config.assets_path + '/js/views/**/*.html']) //obs: /**/ todos os diretorios
      .pipe(gulp.dest(config.build_path_html)) // (pipe: tarefa) copiando todos os arquivos de gulp.src(resources_path) para o gulp.dest(public_path)
      .pipe(liveReload()); // (pipe: tarefa) notifica o bash com o liveReload()
});

gulp.task('copy-scripts', function(){
    
    gulp.src([config.assets_path + '/js/**/*.js']) //obs: /**/ todos os diretorios
      .pipe(gulp.dest(config.build_path_js)) // (pipe: tarefa) copiando todos os arquivos de gulp.src(resources_path) para o gulp.dest(public_path)
      .pipe(liveReload()); // (pipe: tarefa) notifica o bash com o liveReload()
      
    gulp.src(config.vendor_path_js) // js de terceiros
      .pipe(gulp.dest(config.build_vendor_path_js))
      .pipe(liveReload());  
});



// dev
gulp.task('watch-dev', ['clear-build-folder'], function(){
    
    liveReload.listen(); // ligando o watch
    
    gulp.start('copy-styles', 'copy-scripts', 'copy-html');  // chamando outras tarefas
    
    gulp.watch(config.assets_path + '/**', ['copy-styles','copy-scripts','copy-html']); 
    //gulp.watch é src de onde vai assistir as mudancas, caso elas acontecam, ele e a copia e joga no public
    
});

// prod
gulp.task('default', ['clear-build-folder'], function(){
    
    gulp.start('copy-html');
    
    elixir(function(mix) {
        
        //pegando todos os css (proprios e de terceiros) e os comprimindo e nomeando o como public/css/all.css 
        mix.styles(config.vendor_path_css.concat([config.assets_path + '/css/**/*.css']),
        'public/css/all.css',
        config.assets_path); 
        
        //pegando todos os js (proprios e de terceiros) e os comprimindo e nomeando o como public/js/all.js 
        mix.scripts(config.vendor_path_js.concat([config.assets_path + '/js/**/*.js']),
        'public/js/all.js', // nome do arquivo comprimido
        config.assets_path); // endereco caminho dos arquivos q serao comprimidos (resource_path)
        
        // versionando para mater o cache
        mix.version(['js/all.js', 'css/all.css']);
        
    });
});

gulp.task('clear-build-folder', function(){
    clean.sync(config.build_path); // excluindo os arquivos
});


//elixir(function(mix) {
//    mix.sass('app.scss');
//});


//gulp.task('hello-world', function(){
//    console.log('hello world!!!');
//});





    
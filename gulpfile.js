// Importaciones
var gulp = require('gulp');
var javascriptObfuscator = require('gulp-javascript-obfuscator');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier');
var htmlreplace = require('gulp-html-replace');

// Ofuscar Js
gulp.task('ofuscateJS', function() {
    return gulp.src('scripts.js')
        .pipe(javascriptObfuscator())
        .pipe(gulp.dest('dist'));
});

// Minimizar Css
gulp.task('minifyCSS', () => {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
});

// Minimizar HTML
gulp.task('minifyHTML', async function() {
    gulp.src('index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
});

// Reemplaza los archivos
gulp.task('Reemplaza', async function() {
    gulp.src('dist/index.html')
        .pipe(htmlreplace({
            'css1': {
                'src': 'style.css',
                'tpl': '<link href="%s" rel="stylesheet" type="text/css" media="all" />'
            },
            'css2': {
                'src': 'reset.css',
                'tpl': '<link href="%s" rel="stylesheet" type="text/css" media="all" />'
            },
            'img1': {
                'src': 'fruit.jpg',
                'tpl': '<img src="../images/%s" alt="fruit">'
            },
            'img2': {
                'src': 'vegetable.jpg',
                'tpl': '<img src="../images/%s" alt="vegetables">'
            },
            'img3': {
                'src': 'bread.jpg',
                'tpl': '<img src="../images/%s" alt="bread">'
            },
            'js': 'scripts.js'
        }))

    .pipe(gulp.dest('dist'));
});
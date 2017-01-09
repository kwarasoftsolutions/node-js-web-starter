'use strict';

let gulp = require('gulp');
let gulputil = require('gulp-util');
//let frontsource = './bower_components/'

//var paths = {
//    webroot: './',
//    bower: './bower_components/',
//    lib: './public/library/'
//}



gulp.task('default',['copy-library'], function () {
    //gulputil.log('starting gulp process');
});


gulp.task('copy-library', function () {
    //let bower = {
    //    "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
    //    "fontawesome": "font-awesome/**/*.{js,map,css,ttf,svg,woff,eot}",
    //    "jquery": "jquery/dist/**/*.{js,map}",

    //};
    //for(var dest in bower){
    //    //gulputil.log(dest);
    //    //gulp.src(frontsource+'**').pipe(gulp.dest('public/library'));
    //    gulp.src(paths.bower + bower[dest])
    //        .pipe(gulp.dest(paths.lib + dest));
    //}
   
});

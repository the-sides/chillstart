const {src, dest, series, parallel} = require('gulp')
const watch = require('glob-watcher')
const webpack = require('webpack-stream')
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const del = require('del')
const named = require('vinyl-named')
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer')

function clean(){
    return del([
        './dist/scripts/**',
        './dist/styles/**'
    ])
}

async function bsTask(){
    console.log('this is bs');
    return browserSync.init({
        proxy: "localhost:3000", 
        port: 3001
    })
}
async function nodemonTask(cb) {
        return nodemon( {
            script: './server.js', 
            ext: 'js html', 
            env: { 'NODE_ENV': 'development' }, 
            port: 3000, 
            done: cb()
        })//.once('start', cb);

};


function styles(){
    return src('./src/styles/**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer())
            .pipe(dest('dist/styles/'))
            .pipe(browserSync.stream())
}
function scripts(){
    return src(['./src/scripts/client.js'
               ])
            .pipe(sourcemaps.init())
            .pipe(named())
            .pipe(webpack({
                mode: 'development'
            }))
            .pipe(sourcemaps.write())
            .pipe(dest('dist/scripts/'));
}

function vendors(){
        return src(['node_modules/animejs/lib/anime.js'])
        .pipe(dest('dist/vendors/'))
}

function images(){
    return src(['./vendors/media/**/**'])
            .pipe(dest('dist/images/'))
}

const devBuild = series(
    clean, 
    scripts, 
    parallel(
        styles, 
        images
        )
    )

async function watcher(){
    watch(['./src/styles/**/*.scss'], styles )
    watch( [ `./src/scripts/**/**`, `./views/*.pug`], ()=>{
        console.log('Files changed, rebuilding...')
        series(
            devBuild(),
            setTimeout(browserSync.reload,2000)
            )

    });
}


const run = series(devBuild, watcher, nodemonTask, bsTask);

module.exports = {devBuild, watcher, run, clean}
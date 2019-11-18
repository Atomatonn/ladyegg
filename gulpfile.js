// Load all gulp plugins
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        pattern: '*'
    });

//Sass Compilation
function sass(done) {
    gulp.src('./scss/main.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./css'))
        .pipe(plugins.browserSync.reload({
            stream: true
        }));
    done();
};

//Css Minification and concat
var cssFiles = './css/*.css',
    cssDest = './dist/css';

function css(done) {
    return gulp.src(cssFiles)
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        // .pipe(plugins.autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: false
        // }))
        .pipe(plugins.concat('styles.css'))
        .pipe(gulp.dest(cssDest))
        .pipe(plugins.cleanCss())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(cssDest))
        .pipe(plugins.browserSync.reload({
            stream: true
        }));
    done();
};

// JS Concat and uglify
var jsFiles = './js/*.js',
    jsDest = './dist/scripts';

function js(done) {
    return gulp.src(jsFiles)
        .pipe(plugins.terser())
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(plugins.rename('scripts.min.js'))
        // .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(jsDest))
        .pipe(plugins.browserSync.reload({
            stream: true
        }));
    done();
};

// Image Minification
function image_min(done) {
    gulp.src('./img/**/*')
        .pipe(plugins.plumber())
        .pipe(plugins.imagemin())
        .pipe(gulp.dest('./dist/img'))
        .pipe(plugins.browserSync.reload({
            stream: true
        }));

    done();
};

// Browser sync
// function browser_sync(done) {
//     plugins.browserSync.init({
//         server: {
//             baseDir: './'
//         },
//         online: true
//     });
//     done();
// };

// A simple task to reload the page
function reload() {
    plugins.browserSync.reload();
};

function watch_files() {
    plugins.browserSync.init({
        server: {
            baseDir: './'
        },
        online: true
    });
    gulp.watch('./scss/**/*.scss', sass);
    gulp.watch('./css/*.css', css);
    gulp.watch('./js/*.js', js);
    gulp.watch('./dist/js/*.js', reload);
    gulp.watch('./dist/css/*.css', reload);
    gulp.watch("./*.html").on('change', reload);
};
//
//     gulp.watch('./scss/**/*.scss', ['scss']);
//     gulp.watch('./css/*.css', ['minify-css']);
//     gulp.watch('./js/*.js', ['scripts']);
//     gulp.watch('./dist/js/*.js').on('change', plugins.browserSync.reload);
//     gulp.watch('./dist/css/*.css').on('change', plugins.browserSync.reload);
//     gulp.watch('./*.html').on('change', plugins.browserSync.reload);
// });
//
// // RUN
// gulp.task('default', ['scss', 'minify-css', 'scripts', 'imagemin', 'serve']);

gulp.task("sass", sass);

gulp.task("css", css);

gulp.task("js", js);

gulp.task("image_min", image_min);

gulp.task('default', gulp.parallel(sass, css, js, image_min, watch_files));

gulp.task('watch', gulp.series(watch_files));

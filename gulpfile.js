let gulp = require('gulp');
let concat = require('gulp-concat');
gulp.task('default', ['css', 'watch']);
gulp.task('css', function () {
    let post_css = require('gulp-postcss');
    let tailwind = require('tailwindcss');

    return gulp.src(['./tailwind.css', 'src/components/**/*.css'])
        .pipe(concat('index.css'))
        .pipe(post_css([
            tailwind('./tailwind-config.js'),
            require('autoprefixer'),
        ]))
        .pipe(gulp.dest('src/'));
});
gulp.task('watch', function() {
    gulp.watch('src/components/**/*.css', ['css']);
});
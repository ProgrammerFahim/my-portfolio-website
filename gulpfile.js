const gulp = require('gulp');
const sass = require('gulp-sass');

// compile scss into css
function style() {
	// 1. where is my scss file
	return gulp.src('./scss/**/*.scss')
	// 2. pass that file through the sass compiler
		.pipe(sass().on('error', sass.logError))	
	// 3. where do I save the compiled CSS?
		.pipe(gulp.dest('./src'))
}

function watch() {
	gulp.watch('./scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;

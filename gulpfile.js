var gulp = require('gulp');
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css');
	//responsive = require('gulp-responsive'); --> does'not work. keep showing error message due to sharp something.

gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('js/'));
});

gulp.task('styles', function(){
	gulp.src('css/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('minCSS'));
});

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('css/*.css', ['styles']);
});

/*gulp.task('images', function () {
  return gulp.src('image_src/*.{jpg,png}')
    .pipe($.responsive({
      '*.jpg': {
        // Resize all JPG images to 200 pixels wide
        width: 200,
      },
      '*.png': {
        // Resize all PNG images to 50% of original pixels wide
        width: '50%',
      },
      // Resize all images to 100 pixels wide and add suffix -thumbnail
      '*': {
        width: 100,
        rename: { suffix: '-thumbnail' },
      },
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 70,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 6,
      // Strip all metadata
      withMetadata: false,
    }))
    .pipe(gulp.dest('images/'));
});*/

gulp.task('default', ['scripts', 'styles']);





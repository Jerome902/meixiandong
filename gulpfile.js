//导入
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');	

//任务
gulp.task('js',function(){
	gulp.src('src/js/*.js')
	.pipe(rename({"suffix" : ".min"}))
	.pipe(uglify())
	.pipe(gulp.dest("./dist/js"));
})
gulp.task('sass',function(){
	gulp.src('src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist/css'));
})
gulp.task('img', function(){
    gulp.src('src/img/detail/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/detail'))
})
//自动监听
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/js/*.js',['js']);
})
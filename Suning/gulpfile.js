const gulp = require('gulp');//引入gulp这个模块
const connect = require("gulp-connect");//引入服务器模块
const sass = require("gulp-sass");//将sass转换成css的模块
const sourcemaps = require("gulp-sourcemaps");//让sass和css关联的模块
const concat = require("gulp-concat");//合并js
const uglify = require("gulp-uglify");//压缩js
const rename = require("gulp-rename");//重命名
const cleanCss = require("gulp-clean-css");//压缩css
const babel = require("gulp-babel");//转js版本

//创建任务  执行任务 在命令行里 gulp hello
gulp.task("hello",function(){
	console.log("hello world");
});

//默认任务   只需输入gulp就可以执行数组里的任务
gulp.task("default",["hello"]);

gulp.task("copy-index",function(){
	//gulp会代码做出一些操作
	//开发时 会有两个版本的  一个开发版本，非常详细的版本   一个线上版本  处理过后的版本
	gulp.src("shouye.html").pipe(gulp.dest("dist")).pipe(connect.reload());
;
});

gulp.task("html",function(){
	//gulp会代码做出一些操作
	//开发时 会有两个版本的  一个开发版本，非常详细的版本   一个线上版本  处理过后的版本
	gulp.src("html/*.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
;
});

gulp.task("sas",function(){
	//gulp会代码做出一些操作
	//开发时 会有两个版本的  一个开发版本，非常详细的版本   一个线上版本  处理过后的版本
	gulp.src("sass/*.scss").pipe(gulp.dest("dist/sass")).pipe(connect.reload());
;
});
/*gulp.task("images",function(){
	gulp.src("images/*.{jpg,png}").pipe(gulp.dest("dist/imgs"));
});*/
gulp.task("images",function(){
	gulp.src("img/**").pipe(gulp.dest("dist/img"));
});

gulp.task("data",function(){
	gulp.src(["json/*.json","xml/*.xml"]).pipe(gulp.dest("dist/data"));
});

gulp.task("build",["copy-index","images","data"],function(){
	console.log("完成");
});

gulp.task("watch",function(){
	gulp.watch("index.html",["copy-index"]);
});

gulp.task('server',function(){ 
	connect.server({
		root:'dist',
		livereload:true 
		});
});

gulp.task("default",["server","watch"]);


gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"));
});

/*gulp.task("concat",function(){
	gulp.src(["js/a.js","js/b.js"])
	.pipe(concat("c.js"))
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename("c.min.js"))
	.pipe(gulp.dest("dist/js"));
})*/

gulp.task("uglify",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())
	.pipe(rename({
		suffix: ".min",
		extname: ".js"
	}))
	.pipe(gulp.dest("dist/js"))
});

gulp.task("cleanCss",function(){
	gulp.src("css/*.css")
	.pipe(cleanCss())
	.pipe(gulp.dest("dist/styles"));
});

gulp.task("babel",function(){
	gulp.src("js/*.js")
	.pipe(babel({"presets":["es2015"]}))
	.pipe(gulp.dest("dist/js"));
})


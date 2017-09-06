var gulp = require('gulp');
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var minifycss = require("gulp-minify-css");
//var sass = require('gulp-sass');
//复制、、、
gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/yiguwwang666"))
})
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/yiguwwang666/css/"))
})
gulp.task("images",function(){
	gulp.src("img/*.{jpg,png,gif,bmp}")
	.pipe(gulp.dest("D:/phpStudy/WWW/yiguwwang666/img/"))
})
gulp.task("html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/yiguwwang666/html/"))
})
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/yiguwwang666/js/"))
})
gulp.task("font",function(){
	gulp.src("font/**")
	.pipe(gulp.dest("D:/phpStudy/WWW/yiguwwang666/font/"))
})
gulp.task("php",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("D:/phpStudy/WWW/yiguwwang666"))
})
//编译sass
gulp.task("sass",function(){
	gulp.src("scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("D:/phpStudy/WWW/yiguwwang666/css/"))
})
gulp.task('all',function(){//copy这些项目收文件到服务器下
	gulp.src(['*/**/*','*.php','*.html','!node_modules/**/*','!*.json','!*.project'])
	.pipe(gulp.dest('D:/phpStudy/WWW/yiguwwang666'));
});


//把两个js文件合并成一个js文件
gulp.task("concatJS",function(){
	 gulp.src(["js/firsttop.js","js/zhuce.js"])
	.pipe(concat("alltwo.js"))
	.pipe(gulp.dest('D:/phpStudy/WWW/yiguwwang666/js/'));
});

//先压缩一个js文件
gulp.task("uglifyjs",function(){
	gulp.src("js/firsttop.js")
	.pipe(uglify())
	.pipe(gulp.dest('D:/phpStudy/WWW/yiguwwang666/js/'));
})

//合并并压缩
gulp.task("concatAndUglify",function(){
	gulp.src(["js/firsttop.js","js/zhuce.js"])
	.pipe(concat("all.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest('D:/phpStudy/WWW/yiguwwang666/js/'));
});

//合并，压缩，重命名
gulp.task("concatAndUglifyAndRename",function(){
	gulp.src(["js/firsttop.js","js/zhuce.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest('D:/phpStudy/WWW/yiguwwang666/js/'))
	.pipe(uglify())
	.pipe(rename("all.min.js"))
	.pipe(gulp.dest('D:/phpStudy/WWW/yiguwwang666/js/'));
});

//压缩css
gulp.task("minifyCss",function(){
	gulp.src("css/*.css")
	.pipe(minifycss())
	.pipe(gulp.dest('D:/phpStudy/WWW/yiguwwang666/css/'));	
});



gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("img/*.{jpg,png,gif,bmp}",["images"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("font/**",["font"]);
	gulp.watch("*.php",["php"]);
	gulp.watch("scss/*.scss",["sass"]);
})




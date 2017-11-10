var gulp = require("gulp"),
	sass = require("gulp-sass"),
	sourcemaps = require("gulp-sourcemaps"),
	browserSync = require("browser-sync").create(),
	autoprefixer = require("gulp-autoprefixer"),
	minify = require("gulp-minify-css"),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat"),
	rename = require("gulp-rename");

gulp.task("sass", function() {
	gulp
		.src("public/src/scss/global.scss")
		// .pipe(sass({includePaths: ['scss']}))
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"]
			})
		)
		.pipe(concat("style.css"))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("public/dist"))
		.pipe(browserSync.stream());
});

gulp.task("build-css", function() {
	gulp
		.src("public/src/scss/global.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"]
			})
		)
		.pipe(minify())
		.pipe(concat("style.min.css"))
		.pipe(gulp.dest("public/dist"));
});

// gulp.task('build-js', function() {
//
//     gulp.src([
//             'public/src/js/lazysizes.min.js',
//             'public/src/js/clipboard.min.js'
//         ])
//         .pipe(concat('scripts.js'))
//         .pipe(gulp.dest('./js/min'))
//         .pipe(rename({suffix: '.min'}))
//         .pipe(uglify())
//         .pipe(gulp.dest('./js/min'));
// public/dist/scripts.js
// });

gulp.task("scripts", function() {
	return (gulp
			// "public/src/js/clipboard.min.js",
			.src(["public/src/js/clipboard.min.js", "public/src/js/lazysizes.min.js"])
			.pipe(concat("scripts.js"))
			.pipe(gulp.dest("public/dist/js"))
			.pipe(rename("scripts.min.js"))
			.pipe(uglify())
			.pipe(gulp.dest("public/dist/js")) );
});

gulp.task("serve", function() {
	browserSync.init({
		proxy: "https://leah.dev",
		files: ["templates/**", "public/src/js/**"],
		//https: true,
		notify: {
			styles: {
				top: "auto",
				bottom: "0"
			}
		},
		snippetOptions: {
			rule: {
				match: /<\/head>/i,
				fn: function(snippet, match) {
					return snippet + match;
				}
			}
		}
	});
});

gulp.task("watch", function() {
	gulp.watch(["public/src/scss/*.scss", "public/src/scss/**/*.scss"], ["sass"]);
	gulp.watch("craft/templates/**/*.twig").on("change", browserSync.reload);
	gulp.watch(["public/src/js/project.js"]).on("change", browserSync.reload);
});

gulp.task("default", ["sass", "scripts", "serve", "watch"]);

gulp.task("build", ["build-css", "build-js"]);

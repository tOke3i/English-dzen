"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync");
var mqpacker = require("css-mqpacker");
var cleanCSS = require("gulp-clean-css");


// sass task
gulp.task("style", function() {
	gulp.src("work-css/main.css")
		.pipe(plumber())
		.pipe(postcss([
			autoprefixer({
				browsers: ["last 4 versions"]
			}),
			mqpacker({
				sort: true
			})
		]))
		.pipe(gulp.dest("css"))
		.pipe(server.reload({
			stream: true
		}));
});

// server task
gulp.task("serve", ["style"], function() {
	server.init({
		server: ".",
		notify: false,
		open: true,
		ui: false
	});
	gulp.watch("**/*.css", ["style"]);
	gulp.watch("*.html").on("change", server.reload);
	gulp.watch("*/js.js").on("change", server.reload);
});


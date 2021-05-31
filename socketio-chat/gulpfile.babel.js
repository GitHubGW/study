import gulp from "gulp";
import gulpSass from "gulp-sass";
import nodeSass from "node-sass";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import bro from "gulp-bro";
import del from "del";
import babelify from "babelify";

gulpSass.compiler = nodeSass;

const path = {
  scss: {
    watch: "assets/scss/**/*.scss",
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
  },
  js: {
    watch: "assets/js/**/*.js",
    src: "assets/js/main.js",
    dest: "src/static/js",
  },
};

const scssGulp = () => {
  return gulp.src(path.scss.src).pipe(gulpSass()).pipe(csso()).pipe(autoprefixer()).pipe(gulp.dest(path.scss.dest));
};

const jsGulp = () => {
  return gulp
    .src(path.js.src)
    .pipe(
      bro({
        transform: [babelify.configure({ presets: ["@babel/preset-env"] }), ["uglifyify", { global: true }]],
      })
    )
    .pipe(gulp.dest(path.js.dest));
};

const clean = () => {
  return del(["static"]);
};

const watch = () => {
  gulp.watch(path.scss.watch, scssGulp);
  gulp.watch(path.js.watch, jsGulp);
};

export const build = gulp.series(clean, scssGulp, jsGulp);
export const dev = gulp.series([clean, scssGulp, jsGulp, watch]);

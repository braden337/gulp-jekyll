var gulp = require("gulp");
var ghpages = require("gulp-gh-pages");


gulp.task("deploy", function() {
  return gulp.src("./_site/**/*")
    .pipe(ghpages());
});

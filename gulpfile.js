const gulp = require('gulp');
const pug = require('gulp-pug');

// All path endure in a sparate object
const paths = {
  root: './build',
  templates: {
    pages: 'src/templates/pages/*.pug',
    src: 'src/templates/**/*.pug', // Finding all pug files
    dest: 'build/assets/'
  } 
}

function templates() {
  return gulp.src(paths.templates.pages)
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(paths.root));
}


exports.templates = templates;
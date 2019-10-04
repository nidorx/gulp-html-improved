# gulp-html-improved [![npm package](https://badge.fury.io/js/gulp-html-improved.svg)](https://www.npmjs.com/package/gulp-html-improved)

Gulp plugin for [html-improved](https://github.com/nidorx/html-improved)



## htmlImproved pipe
_Run this task with the `gulp` command._ 

### Options


#### verbose
Show files info

#### defaultVars
Type: `Object|Function`

Sets the variables passed to **Html Improved** during template compilation. Any data can be passed to the template.

```js
const htmlImproved = require('gulp-html-improved');

const htmlLocals = {
    package: require('./package.json'),
    project: require('./project.json'),
    otherVar: 'value'
}


gulp.task('html', function () {
    return gulp
        .src('src/**/*.html')
        .pipe(htmlImproved({locals: htmlLocals}))
        .pipe(gulp.dest('dist'));
});
```

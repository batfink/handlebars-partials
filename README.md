handlebars-partials
===================

Simple experiment with using handlebars partials from a module. Could be useful for making a collection of widgets for instance.

Install with ```npm i -D batfink/handlebars-partials```

Usage:

```javascript
var handlebars = require('handlebars');
require('handlebars-partials')(handlebars);
```

## Example gulpfile.js

```javascript
var gulp = require('gulp');
var handlebars = require('handlebars');
var fs = require('fs');
var file = require('gulp-file');

var partials = require('handlebars-partials')(handlebars);

gulp.task('default', function() {
    var src = fs.readFileSync('src/index.hbs').toString();

    var template = handlebars.compile(src);

    var data = {
        message: 'tjobing'
    }

    file('index.html', template(data))
        .pipe(gulp.dest('dist'));

})
````

## Example handlebars template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>
    {{>header}}

    <p>{{message}}</p>

</body>
</html>
```


## Example output

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>
    <header>here be dragons…</header>


    <p>tjobing</p>

</body>
</html>
```

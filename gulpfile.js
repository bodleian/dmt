var Config = require('./gulpfile.config'),
    config = new Config(),
    exec = require('child_process').exec,
    gulp = require('gulp'),
    open = require('open'),
    requireDir = require('require-dir'),
    runSequence = require('run-sequence'),
    tasks = requireDir('./tasks');

gulp.task('serve', function(){
    exec('npm start', function (err, stdout, stderr) {
        open('http://localhost:' + config.port);
    });
});

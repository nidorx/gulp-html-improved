const log = require('fancy-log');
const through = require('through2');
const PluginError = require('plugin-error');
const htmlImproved = require('html-improved');

'use strict';


module.exports = function html(options) {

    const opts = Object.assign({}, options);

    const data = Object.assign(opts.data || {}, opts.locals || {});

    return through.obj(function (file, enc, cb) {
        // No support for streams
        if (file.isStream()) {
            return cb(new PluginError('gulp-html-improved', 'Streaming not supported'));
        }

        if (file.isBuffer()) {
            try {

                const contents = String(file.contents);
                if (opts.verbose === true) {
                    log('compiling file', file.path);
                }

                const fileLoader = function (filePath) {
                    if (file.path === filePath) {
                        return contents;
                    }
                    return (fs.readFileSync(filePath) + '');
                };

                file.contents = new Buffer(htmlImproved(file.path, fileLoader, data));
            } catch (e) {
                return cb(new PluginError('gulp-html-improved', e));
            }
        }

        cb(null, file);
    });
};

const opener = require('opener');
const removeCallback = require('lodash/pull');

/**
 * @param url
 * @constructor
 */
function OpenerPlugin(url = 'http://localhost:8080') {
    this.url = url;
}

OpenerPlugin.prototype.apply = function (compiler) {
    const url = this.url;
    compiler.plugin('done', function openerCallback(stats) {
        if (!stats.hasErrors()) {
            removeCallback(stats.compilation.compiler._plugins.done, openerCallback);
            opener(url);
        }
    });
};

module.exports = OpenerPlugin;
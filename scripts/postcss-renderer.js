var postcss = require('postcss');
var next = require('postcss-cssnext');

var renderPostCSS = function (data, options) {

    return postcss([next()])
        .process(data.text)
        .then(function (result) {
            return result.css;
        });
};

hexo.extend.renderer.register('css', 'css', renderPostCSS);
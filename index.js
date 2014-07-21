'use strict';

var fs = require('fs');
var path = require('path');

function partials(handlebars) {
    var partials = fs.readdirSync('partials');

    partials.forEach(function(partial) {
        handlebars.registerPartial(path.basename(partial, '.hbs'), partial);
    })

    return handlebars;
}

module.exports = partials;

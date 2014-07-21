'use strict';

var fs = require('fs');
var path = require('path');

function partials(handlebars) {
    var partials = fs.readdirSync(__dirname + '/partials');

    partials.forEach(function(partial) {
        handlebars.registerPartial(path.basename(partial, '.hbs'), fs.readFileSync(__dirname + '/partials/' + partial).toString());
    })

    return handlebars;
}

module.exports = partials;

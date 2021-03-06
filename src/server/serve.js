var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV;

app.use(express.static('./'));

switch (env) {
    case 'production':
        console.log('In build-environment.');
        app.use(express.static('./build/public/'));
        app.use('/*', express.static('./build/public/index.html'));
        break;
    default:
        console.log('In dev-environment.');
        app.use(express.static('./src/client/public/'));
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function () {
    console.log('Running server on port ' + port);
});
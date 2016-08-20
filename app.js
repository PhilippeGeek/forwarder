var http = require('http');
var httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const server = http.createServer(function (req, res) {
    proxy.web(req, res, { target: 'https://www.twin2green.com' })
});

server.listen(5000);

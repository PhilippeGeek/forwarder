var http = require('http');
var httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const server = http.createServer(function (req, res) {
    res.writeHead(301,
        {Location: (process.env.REDIRECTED_URL)+req.url}
    );
    res.end();
});

server.listen(process.env.PORT||5000);

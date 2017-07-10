/**
 * 浏览器调试用
 */

var http = require('http')
var fs = require('fs')
var port = 8080

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' })
    var index = fs.readFileSync('index.html')
    res.end(index)
}).listen(port)

console.log('server at http://localhost:' + port)
var http = require('http');

var nicePORT = 7000;
var meanPORT = 7050;

var handleRequest = function (req, res) {
    res.end("You rock " + req.url)
}
var handleMeanRequest = function (req, res) {
    res.end("You suck " + req.url)
}



var niceServer = http.createServer(handleRequest);
var meanServer = http.createServer(handleMeanRequest);


niceServer.listen(nicePORT, function(){
    console.log("Server is listening at http://localhost:%s", nicePORT)
})

meanServer.listen(meanPORT, function(){
    console.log("Server is listening at http://localhost:%s", meanPORT)
})
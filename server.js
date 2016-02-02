var http = require('http');

var nicePORT = 7000;
var meanPORT = 7050;

var goodPhrases = ['You rock ' , 'You\'re awesome '];
var badPhrases = ['You suck ', 'You\'re not that cool '];


var handleRequest = function (req, res) {
    var randGood = Math.floor(Math.random() * goodPhrases.length);
    res.end(goodPhrases[randGood] + req.url)
}
var handleMeanRequest = function (req, res) {
    var randBad = Math.floor(Math.random() * badPhrases.length);
    res.end(badPhrases[randBad] + req.url)
}


var niceServer = http.createServer(handleRequest);
var meanServer = http.createServer(handleMeanRequest);


niceServer.listen(nicePORT, function(){
    console.log("Server is listening at http://localhost:%s", nicePORT)
})

meanServer.listen(meanPORT, function(){
    console.log("Server is listening at http://localhost:%s", meanPORT)
})
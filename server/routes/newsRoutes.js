var express = require('express');
var request = require('request');
var router = express.Router();


var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/Large', (req, res) => {
  //this api no longer works
  var reqUrl = 'http://api.nytimes.com/svc/news/v3/content/'
    + req.query.source + '/'
    + req.query.section + '/'
    + req.query.time + '.json'
    + '?limit=' + req.query.limit
    + '&offset=' + req.query.offset
    + '&api-key=' + "bd7e1715476c4d11adfdabff384399d8";

  var options = { method: 'GET',
    url: reqUrl
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    res.send(body);
  });

//   request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "e7e73dafa9814b9fb3801b53473b59a6",
//     // 'q': "",
//     'sort': "newest"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log('one two three', body);
//   res.send(body)
// })
});




//for url in request:
// first all: all, nyt or iht
// second all: section
// then ? after json: limit= one through 20
//do source || all,    category || all, .... in react copmponents, timeFrame || 24, limit || 20
//example: 'http://api.nytimes.com/svc/news/v3/content/nyt/business/72.json?limit=15'

module.exports = router;

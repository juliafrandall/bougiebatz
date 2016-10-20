var express = require('express');
var request = require('request');
var router = express.Router();
var async = require('async');

var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.use(bodyParser.urlencoded({
  extended: true
}));

router.get('/Large', (req, res) => {
  // console.log('GOT++++++', req.query.source)
  var reqUrl = 'http://api.nytimes.com/svc/news/v3/content/'
    + req.query.source + '/'
    + req.query.section + '/'
    + req.query.time + '.json'
    + '?limit=' + req.query.limit
    + '&offset=' + req.query.offset;

  var options = { method: 'GET',
    url: reqUrl
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    res.send(body);
  });
});


// router.get('/Small', cnn, bbc)
// router.get('/Small', cnn, bbc)

// function cnn(req, res, next){
//   var reqUrl = 'https://newsapi.org/v1/articles?source=cnn&apiKey=ab9d628ffe444969a76c1cd38d253bb9'
//   var options = { method: 'GET',
//     url: reqUrl
//   }
//   request(options, (error, response, body) => {
//     if (error) throw new Error(error);
//     res.send(body);
//   });
//   next();
// } 

// function bbc(req, res, next){
//   var reqUrl = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=ab9d628ffe444969a76c1cd38d253bb9'
//   var options = { method: 'GET',
//     url: reqUrl
//   }
//   request(options, (error, response, body) => {
//     if (error) throw new Error(error);
//     res.send(body);
//   });
//   next();
// } 

// // router.get('/Small', cnn)



router.get('/Small', (req, res) => {
  var reqUrl = 'https://newsapi.org/v1/articles?source=cnn&apiKey=ab9d628ffe444969a76c1cd38d253bb9'
  var options = { method: 'GET',
    url: reqUrl
  };
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    res.send(body);
  });
});




//for url in request:
// first all: all, nyt or iht
// second all: section
// then ? after json: limit= one through 20
//do source || all,    category || all, .... in react copmponents, timeFrame || 24, limit || 20
//example: 'http://api.nytimes.com/svc/news/v3/content/nyt/business/72.json?limit=15'

module.exports = router;

var Twit = require('twit');
var request = require('request');

var T = new Twit({
  consumer_key: 'YwWM306FcB5qMGZeNMG0MVbFq',
  consumer_secret: 'bk8AaGEGHA7CNbu6THyWCtFz5YuPHBG07x9zvgMc8pdktiuiwW',
  access_token:'963707694-HqM1oy2psZX0pkOYPR6tMPED1iHXiQGwqhmfScrz',
  access_token_secret: 'HpDcWFMwBh4nCQqux6v6yx1UdLcS2Z7v3jRgLsqLLRZiP'
});

const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=125468&format=text&lang=en';

function getQuote(callback) {
  request(url, function(error, response, body) {
    console.log('error:', error); //print error if any has ocurred
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
    callback(body);
  });

}
function postTweet(tweet) {
  console.log(tweet);
  T.post('statuses/update', {status: tweet}, function(err, data, response) {
    // console.log(data);

  })

}
getQuote(postTweet);

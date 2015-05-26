var request = require('request');
var querystring = require('querystring');


// DEV

var user = "erero7"; // Your plotly username or email. Sign up here: https://plot.ly/ssu
var key = "uim7iw1p2r"; // Your plotly API key, view here: https://plot.ly/api/key
var token1 = "i0qkzla0e2";
var token2 = "ca12xrca78";
var filename = "streaming second";
var server = 'https://plot.ly/'; //'http://ec2-54-225-12-108.compute-1.amazonaws.com/'

var data = [{
    x:[1, 1, 1, 1, 1]
  , y:[5, 6, 7, 8, 9]
  , type:'scatter'
  , mode:'lines'
  , stream: {
      token: token1
    }
  }
  ,{
    x:[2, 2, 2, 2, 2]
  , y:[1, 2, 3, 4, 5]
  , type: 'scatter'
  , mode: 'lines'
  }
  ,{
    x:[2, 2, 2, 2, 2]
  , y:[1, 2, 3, 4, 5]
  , type: 'scatter'
  , mode: 'lines'
  }
  
]

var query = {
    un: user
  , key: key
  , origin: "plot"
  , platform: "REST"
  , args: JSON.stringify(data)
  , kwargs: JSON.stringify({
     filename: filename
   , fileopt: "overwrite"
    , layout: {
        title: "streaming-demo"
      , width : 600
      , height: 600
    }
    , world_readable: true
  })
};


request(
    {
        method: 'POST'
      // , uri: 'https://plot.ly/clientresp'
      , uri: server+'clientresp/'
      , body:  querystring.stringify(query)
    }
  , function (err, res) {

      if(res.statusCode == 200){
        var payload = JSON.parse(res.body);
        console.log(payload)
      }

      else {
        console.log('error: '+ err, 'status', res.statusCode);
      }

    }

)

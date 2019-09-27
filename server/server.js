var express = require('express');
var bodyParser = require('body-parser');
var unirest = require('unirest');
var app = express();

var env = require('./environment');

const USER_KEY = env.IGDB_KEY;
const IDBG_ROOT = 'https://api-v3.igdb.com';

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 5000);
// app.get('*', function(req, res) {
//   res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });

app.get('/api/games/snes', function(req, res) {
  unirest
    .post(`${IDBG_ROOT}/games`)
    .type('json')
    .send(
      'fields *, cover.*, screenshots.*; where category = 0 & platforms = [19] & rating >= 70 & rating_count > 100; sort rating desc; limit 50;'
    )
    .header('user-key', USER_KEY)
    .header('Accept', 'application/json')
    .end(function(result) {
      if (result.body.length === 0) {
        result.body = 'Not Found';
        res.send(result.body);
      } else {
        res.send(result.body);
      }
    });
});

app.get('/api/games/nes', function(req, res) {
  unirest
    .post(`${IDBG_ROOT}/games`)
    .type('json')
    .send(
      'fields *, cover.*, screenshots.*; where category = 0 & platforms = [18] & rating >= 70 & rating_count > 100; sort rating desc; limit 50;'
    )
    .header('user-key', USER_KEY)
    .header('Accept', 'application/json')
    .end(function(result) {
      if (result.body.length === 0) {
        result.body = 'Not Found';
        res.send(result.body);
      } else {
        res.send(result.body);
      }
    });
});

// app.post('/singlegame', function(req, res) {
//   console.log(req.body.id);
//   unirest
//     .get(
//       'https://igdbcom-internet-game-database-v1.p.mashape.com/games/' +
//         req.body.id +
//         '?fields=*'
//     )
//     .header('user-key', USER_KEY)
//     .header('Accept', 'application/json')
//     .end(function(result) {
//       console.log(result.status, result.body);
//       res.send(result.body);
//     });
// });

// app.post('/company', function(req, res) {
//   unirest
//     .get(
//       'https://igdbcom-internet-game-database-v1.p.mashape.com/companies/' +
//         req.body.companyId +
//         '?fields=name'
//     )
//     .header('user-key', USER_KEY)
//     .header('Accept', 'application/json')
//     .end(function(result) {
//       console.log(result.status, result.body);
//       res.send(result.body);
//     });
// });

app.listen(app.get('port'), function() {
  console.log('Nostalgia Mart backend is running on port ' + app.get('port'));
});

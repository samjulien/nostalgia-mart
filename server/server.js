var express = require('express');
var bodyParser = require('body-parser');
var unirest = require('unirest');
var app = express();
var collection = require('./collection');

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

app.set('port', process.env.PORT || 5000);

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

app.get('/api/games/:id', function(req, res) {
  const id = req.params.id;
  unirest
    .post(`${IDBG_ROOT}/games`)
    .type('json')
    .send(`fields *, cover.*, screenshots.*; where id=${id};`)
    .header('user-key', USER_KEY)
    .header('Accept', 'application/json')
    .end(function(result) {
      if (result.body.length === 0) {
        result.body = 'Not Found';
        res.send(result.body);
      } else {
        res.send(result.body[0]);
      }
    });
});

// TODO: Protect with JWTs
app.get('/api/collection/:id', function(req, res) {
  const id = +req.params.id;
  console.log(id);
  console.log(`collection: ${collection}`);
  userCollectionGameIds = collection
    .filter(game => {
      console.log(game);
      if (game.userId === id) {
        return game;
      }
    })
    .map(game => game.gameId)
    .join(',');
  console.log(userCollectionGameIds);

  unirest
    .post(`${IDBG_ROOT}/games`)
    .type('json')
    .send(
      `fields *, cover.*, screenshots.*; where id=(${userCollectionGameIds});`
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

app.listen(app.get('port'), function() {
  console.log('Nostalgia Mart backend is running on port ' + app.get('port'));
});

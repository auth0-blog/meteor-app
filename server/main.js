import { Slangs } from '../imports/api/slangs.js';
import express from 'express';
import jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  //
});

const app = express();
WebApp.connectHandlers.use(app);

const authCheck = jwt({
  secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g https://prosper.auth0.com
        jwksUri: "{YOUR-AUTH0-DOMAIN}/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: '{YOUR-API-AUDIENCE-ATTRIBUTE}',
    issuer: '{YOUR-AUTH0-DOMAIN}',
    algorithms: ['RS256']
});

app.get('/api/slangs', authCheck, (req, res) => {
  const slangs = Slangs.find().fetch();
  res.status(200).json({ message: slangs });
});


# passport-meetup-oauth2
Meetup OAuth2 Strategy for Passport

[Passport](http://passportjs.org/) strategy for authenticating with [Meetup](https://www.meetup.com)
using the OAuth 2.0 API.

This module lets you authenticate using Meetup in your Node.js applications.
By plugging into Passport, Meetup authentication can be easily and
unobtrusively integrated into any application or framework that supports
[Connect](http://www.senchalabs.org/connect/)-style middleware, including
[Express](http://expressjs.com/).

## Usage

#### Configure Strategy

The Meetup authentication strategy authenticates users using a Meetup
account and OAuth 2.0 tokens.  The strategy requires a `verify` callback, which
accepts these credentials and calls `done` providing a user, as well as
`options` specifying a app ID, app secret, and callback URL.

    var MeetupStrategy = require('passport-meetup-oauth2').Strategy;
    passport.use(new MeetupStrategy({
        clientID: MEETUP_KEY,
        clientSecret: MEETUP_SECRET,
        callbackURL: "http://localhost:3000/auth/meetup/callback"
      }, function (accessToken, refreshToken, profile, done) {
        // store credentials, etc
        });
      }
    ));

#### Authenticate Requests

Use `passport.authenticate()`, specifying the `'meetup'` strategy, to
authenticate requests.

For example, as route middleware in an [Express](http://expressjs.com/)
application:

    app.get('/auth/meetup', passport.authenticate('meetup'));

    app.get('/auth/meetup/callback',
      passport.authenticate('meetup', { failureRedirect: '/login' }),
      function(req, res) {
        // Successul authentication, redirect home.
        res.redirect('/');
      });

## Credits

Created by [Joe Woodhouse](http://github.com/joewoodhouse)

Code based on passport-mailchimp by [Brian Falk](http://github.com/brainflake)

## License

[The MIT License](http://opensource.org/licenses/MIT)

'use strict';

var OAuth2Strategy = require('passport-oauth2'),
    InternalOAuthError = require('passport-oauth2').InternalOAuthError,
    util = require('util');

function Strategy(options,verify){
  options = options || {};
  options.authorizationURL = options.authorizationURL || 'https://secure.meetup.com/oauth2/authorize';
  options.tokenURL = options.tokenURL || 'https://secure.meetup.com/oauth2/access';

  OAuth2Strategy.call(this,options,verify);
  this.name = 'meetup';
  this._refreshURL = options.refreshURL || 'https://secure.meetup.com/oauth2/access';
  this._oauth2._useAuthorizationHeaderForGET = true;
  this._oauth2._skipUserProfile = true;
}

util.inherits(Strategy, OAuth2Strategy);

module.exports = Strategy;

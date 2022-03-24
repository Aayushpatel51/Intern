const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const InstagramStrategy = require("passport-instagram").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const TwitchStrategy = require("passport-twitch").Strategy;
const SpotifyStrategy = require('passport-spotify').Strategy;
const passport = require("passport");

GOOGLE_CLIENT_ID = "541194546494-a29th12theaek07noqlads7rnegaejvc.apps.googleusercontent.com";
GOOGLE_CLIENT_SECRET = "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";

FACEBOOK_APP_ID = "1067824950455470";
FACEBOOK_APP_SECRET = "c628a70d7bf80ae6a81c6d6e5553fe34";

INSTAGRAM_CLIENT_ID="0d517fd22d63445181091e63578caf92";
INSTAGRAM_CLIENT_SECRET="3ea8588c8f7f43ebb4ff89fd5519b1fc";

GITHUB_CLIENT_ID="ca07c74962097b8480f6";
GITHUB_CLIENT_SECRET="a9428e7a75c59e24a32c0f473da2dbd42d5fbb89";

TWITCH_CLIENT_ID="3bim2h9k5ht5jfyktqpuqiasdexg27";
TWITCH_CLIENT_SECRET="bz4tt9sztacz4sd8qx8rg8imqbsjjn";

SPOTIFY_CLIENT_ID="2ab04beb997b4e75bede51e1caed6ffc";
SPOTIFY_CLIENT_SECRET="27d00d3b6dcb4ac2af1fa6f64cd0ce74"

passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );
  
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.use(new InstagramStrategy({
  clientID: INSTAGRAM_CLIENT_ID,
  clientSecret: INSTAGRAM_CLIENT_SECRET,
  callbackURL: "/auth/instagram/callback"
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}
));

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: "/auth/github/callback"
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}
));

passport.use(new TwitchStrategy({
  clientID: TWITCH_CLIENT_ID,
  clientSecret: TWITCH_CLIENT_SECRET,
  callbackURL: "/auth/twitch/callback"
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}
));

passport.use(new SpotifyStrategy({
  clientID: SPOTIFY_CLIENT_ID,
  clientSecret: SPOTIFY_CLIENT_SECRET,
  callbackURL: "/auth/spotify/callback"
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}
));

  passport.serializeUser((user, cd) => {
    cd(null, user);
  });
  
  passport.deserializeUser((user, cd) => {
    cd(null, user);
  });
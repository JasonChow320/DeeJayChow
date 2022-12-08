const config = {
    app: {
      port: 3001
    },
    db: {
      host: 'localhost',
      port: 27017,
      name: 'DEV'
    },
    spotify : {
        SPOTIFY_CLIENTID : 'NEED TO GET YOUR OWN API KEYS',
        SPOTIFY_SECRETID : 'NEED TO GET YOUR OWN API KEYS',

        callback : 'http://localhost:3001/spotifyapi/callback/'
    },
    crypto : {
        salt : '!@#$%^&&*()QWERTYASDFZXCV',
        admin : 'th3r00t'
    }
};

module.exports = config;

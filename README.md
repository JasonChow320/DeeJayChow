# Introduction

DeeJayChow (I'm the DJ in this case..) is a full stack application that implements the client-server architecture for users (client) to request music to be added to a spotify queue (server's spotify play queue). The goal of this app is to allow friends and families to have a collective aux at an event. The backend interacts with the Spotify web API and controls the queue (there's no API endpoint to manipulate the queue directly, only add to the end of the queue) and the front-end can search and request songs to be added to the queue. 

# Dedepency

The app uses the MERN stack (MongoDB, Express, React, NodeJs) and also Redis, therefore if you would like to host the server, you'll need to install all of these dependencies.  
**NOTE!**  
This app is under development and dependencies are subject to change (or require updates)

---

Here's a list of dependencies you'll need to install in order to run the app  

1. NodeJs (nvm or some kind of package manager is also recommended)  
2. MongoDB
3. Redis

# Config

Due to security reasons with salting and API keys, the config file is not provided. Please use the following commands and format to create a config directory within src and a config.json file to store all your private server information.  

In server/src directory:  
```bash
mkdir -p config
cd config
touch config.json
```

The config file should be in this format
```
const config = {
  app: {
    port: 3001
  },
  db: {
    host: 'localhost',
    port: 27017,
    name: 'DEV'
  },
  spotify: {
    SPOTIFY_CLIENTID: 'insert your api key here',
    SPOTIFY_SECRETID: 'insert your api key here',
    
    callback: 'http://localhost:3001/spotifyapi/callback/'
  }.
  crypto: {
    salt: 'insert your salt here',
    admin: 'insert your admin password here'
  }
};

module.exports = config;
```

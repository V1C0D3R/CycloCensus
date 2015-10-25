# CycloStat
A statistic engine to know when to take a bike according to your time.

This repository contains the source code for the search API.

The search api consists in the following main components:

 * Node modules to manage the rest api and to connect with externals modules.
 * A server exposing an API to interact with third-party services and returns sorted search results.

## Requirements

- Node 0.10.x & NPM
- MongoDB

Use whatever you want to install them (from source, homebrew, apt).

## Usage

# Before run

- Log In/Signup on [JCDecaux API Website](https://developer.jcdecaux.com/#/home) and find your API Key.
- Replace [YOUR_API_KEY_HERE] in config_example with your API Key.
- Copy `YOUR_PATH/config.default.js` into a new file called `YOUR_PATH/config.js`.

_/Note_: YOUR_PATH will depend on your current OS user and system configuration.

# Run

Run the API server:

```
npm install
npm start
```

The server should be running on http://localhost:8080. You can change _/port_ and _/apiKey_ in config.js file.

## Contributing

Everything works around one branch (`develop`) to follow the [Github Flow](https://guides.github.com/introduction/flow/).

Don't forget to exclude your apiKey from commits

## More documentation

 * [API Endpoints](https://github.com/V1C0D3R/CycloStat/wiki/Endpoints)

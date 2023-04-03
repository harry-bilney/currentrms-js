# What is this?

This is a simple to use Node.js package that provides communication for the CurrentRMS API.

# Installation

Installation using the node package manager:

`npm i currentrms-js`

Then...

```javascript
const rms = require('currentrms-js') // Import the package

const options = {
    subdomain: 'eventscompany', // Subdomain by itself
    apiKey: '...' // API Key generated from Current
}

rms.connect(options)
```

It is recommended to store sensitive information such as the API key in a .env file to prevent unwanted access to your CurrentRMS system.

# Currently Implemented

* Connection to the API
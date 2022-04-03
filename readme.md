
# Translation service from google sheets

The most unloved thing in the frontend is to write localization files, this library comes to your aid, which will help you

``` bash
$ npm i translation-service-google-sheets -D
```

## Usage/Examples

create file translate.js

``` js
import translate from 'translation-service-google-sheets';

// Initialize the sheet - doc ID is the long id in the sheets URL
// You can pass array of id
const docs = ["sdfasdfTRXX2y9KJt1Q0GEN1qnjpi13o"];

// Google api key
const apiToken = process.env.GOOGLE_PRIVATE_KEY;

// base path form root folder 
const basePath = "static";

const config = {
  docs,
  apiToken,
  basePath,
};

translate(config);
```


```bash
  node translate.js
```

Perfect!

#### Files are generated with names and folders as in the picture below

![App Screenshot](https://i.ibb.co/R26bDNg/Iv-Ib-UW-42-CM.jpg)

#### Output

``` json
"easy": "to use",
"free": "example"
```

#### How can I use it additionally

``` json
"prebuild": "node translate.js",
```

## Video example
[![Alt text](https://i.ibb.co/cbCF3z1/Screenshot.png)](https://www.youtube.com/watch?v=nXMGKO4n5FM)

### How to get api key

Setup Instructions

- Follow steps above to set up project and enable sheets API

- Create an API key for your project
- Navigate to the [credentials section of the google developer console](https://console.cloud.google.com/apis/credentials)
-  Click blue "+ CREATE CREDENTIALS" and select "API key" option
-  Copy the API key

OPTIONAL
- click "Restrict key" on popup to set up restrictions
- Click "API restrictions" > Restrict Key"
- Check the "Google Sheets API" checkbox
- Click "Save"

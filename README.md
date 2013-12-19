openart
=======

An example integration of pio.js using the British Library's flickr photos.

## Running The Solution

You MUST add a config.json file under the `/app` dir with the following data:

````json
{
    "flickr_api_key":"api_key_here"
}
````

Signing up for a flickr api key (is easy)[http://www.flickr.com/services/apps/create/apply].

After that config.json file is present then run `npm install` and `bower install`.

Then after all that, to run locally just run `grunt dev` and open your browser to `http://localhost:8081`.


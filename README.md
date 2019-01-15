# Letterboxd Metacritic Addon

## Overview

This is a Chrome extension that adds two features to [Letterboxd](https://letterboxd.com). You can see the Metascore & color and a button added beside the IMDB and TMDB micro-buttons at the bottom that will link you to the film's Metacritic page.

**Prefer Rotten Tomatoes? I have a Chrome extension for that as well, view it [here](https://github.com/WilliamWelsh/Letterboxd-Rotten-Tomatoes-Addon).**

## Preview

![Image](https://i.redd.it/j8lv5l0k1na21.png)



## Installing

To install this, simply click "Add to Chrome" on the [Chrome Web Store](https://chrome.google.com/webstore/detail/letterboxd-metacritic-add/gkfbajagaabdkcihefomfmgjkdgkgdck).

Link: [https://chrome.google.com/webstore/detail/letterboxd-metacritic-add/gkfbajagaabdkcihefomfmgjkdgkgdck](https://chrome.google.com/webstore/detail/letterboxd-metacritic-add/gkfbajagaabdkcihefomfmgjkdgkgdck) 

![Example](https://i.imgur.com/MjpAAkA.png)



## Installing/Editing Yourself

First, clone the repository.

Second, grab an API key from [The Open Movie Database's website](http://www.omdbapi.com/apikey.aspx). Set `OMDbAPIKey` on line 1 in `content.js` to your API key.

```js
var OMDbAPIKey = "YOUR KEY HERE";
```

Next, you need to load the unpacked extension. In Chrome, visit `chrome://extensions/`. Click "Load unpacked" and choose the directory of the repository. It should now work.

![Extensions Help](https://i.imgur.com/slc6Yst.png)

## Other

Feel free to follow me on Letterboxd. :D

[https://letterboxd.com/WilliamW/](https://letterboxd.com/WilliamW/)
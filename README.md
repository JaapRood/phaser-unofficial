# Unofficial NPM package for Phaser

Phaser is a pretty cool engine for making games in the browser, but unfortunately the original repo doesn't play to nice with NPM and, by extension, Browserify. Until the official package decides to support NPM you can use this (when this happens, raise an issue and we'll have this unpublished on npm in no time).

This is the most fat free version of Phaser, the version with no other libraries. Modules should be small, so if you want any of the plugins you'll have to inject those separately.

## Install

```
npm install phaser-unofficial --save
```

## Example

```js
var Phaser = require('phaser-unofficial');
```

## Versions

Versions of this package are kept in sync with the versions of Phaser so this layer can be as transparent as possible.

## Build a new version

Phaser is pulled in through [Bower](http://bower.io) and copied into place using [Gulp](http://gulpjs.com).

Install Bower and Gulp:

```
npm install -g bower
npm install -g gulp
```

Install project dependancies:

```
cd /path/to/project/root
npm install 
```

Install latest package version

```
cd /path/to/project/root
bower install phaser --force-latest
```

Copy the files into place

```
cd /path/to/project/root
gulp
```

## License

Phaser is released under the [MIT License](http://opensource.org/licenses/MIT).

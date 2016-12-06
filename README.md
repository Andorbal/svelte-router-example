# svelte-router-example
Simple [Svelte](https://svelte.technology) app that uses a router to select "pages."

## Purpose

**TL;DR** Experimental app to test how a router could be implemented using Svelte.

This is a very simple "app" that I'm going to use to test how I'd like a router implemented using Svelte. I'm currently leveraging as much existing code as I can, like [history](https://github.com/mjackson/history) and [route-parser](https://github.com/rcs/route-parser). This way I can focus on only the Svelte aspects.

## How to use

Just clone this repo, remove (or replace) git's origin remote, and build through npm.

```bash
$ git clone https://github.com/Andorbal/svelte-router-example.git
$ cd svelte-router-example
$ git remote rm origin
$ npm install
$ npm start
```

This will start a webserver on port 3000, and uses [livereload](https://github.com/napcs/node-livereload). So you can open your browser, point it at http://localhost:3000, and edit away!

## Options

When running `npm start` or `npm run build`, you can set a few environment variables that affects how the app gets built.

### NODE_ENV

```bash
$ NODE_ENV=production npm run build
```

Setting NODE_ENV to 'production' will cause the app to build in production mode. This means removing things like livereload and running the code through [uglify](https://github.com/mishoo/UglifyJS) to minify the output.

### APP_BASE_PATH

```bash
$ APP_BASE_PATH=/foo npm run build
```

APP_BASE_PATH will let you specify a root directory where your app will live. By default, the app assumes that you'll be running at the root of your server so all routes and url references reflect that. If you plan on serving the app from some other path, you can specify that with this environment variable. The dev server will do its best to mimic this path, but if you're running through a different server, you'll need to make sure the contents of the `build` directory actually live in the path you specified.

## Next steps

I want to eventually extract the router code into an npm module so that other apps could make use of it. I'd also like to add more configuration options so that it's on par with what [react-router](https://github.com/ReactTraining/react-router) can do.

## License

[MIT](https://raw.githubusercontent.com/Andorbal/svelte-router-example/master/LICENSE)

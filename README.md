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

## Next steps

I want to eventually extract the router code into an npm module so that other apps could make use of it. I'd also like to add more configuration options so that it's on par with what [react-router](https://github.com/ReactTraining/react-router) can do.

## License

[MIT](https://raw.githubusercontent.com/Andorbal/svelte-router-example/master/LICENSE)

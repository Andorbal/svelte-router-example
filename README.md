# svelte-startup
Simple starter kit for a [Svelte](https://svelte.technology) app

## Purpose

**TL;DR** This is a simple jumping-off point for Svelte apps.

While going through the [getting started](https://svelte.technology/guide) guide for Svelte, I came across a line that said using modules is the recommended way to build a serious app, but that required more setup. OK, I thought... What setup? But the guide didnt go into it.

So I dug around and got a simple app building that used modules built by [rollup](http://rollupjs.org). I tried to boil it down to the bare essentials and this is what I came up with.

## How to use

Just clone this repo, remove (or replace) git's origin remote, and build through npm.

```bash 
$ git clone https://github.com/Andorbal/svelte-startup.git
$ cd svelte-startup
$ git remote rm origin
$ npm install
$ npm run build
```

You should be able to open ./dist/index.html directly in a browser, but you'll most likely want to serve that directory with something like python's SimpleHTTPServer. This is a pain point I want to address.

If you use [yarn](https://yarnpkg.com), I have a lock file included so you can use that instead of npm.

## Next steps

I'd like this eventually be similar to [create-react-app](https://github.com/facebookincubator/create-react-app), but that's the future. For now, I want to get a watch in place so that you don't need to run `npm run build` after each change. As I mentioned above, here is no dev server so you need to take care of that yourself. I want to fix that. I would also like to do minification, letting you differentiate between dev and release builds.

My short term goals will be driven by the pain points as I explore this un-framework.

## License

[MIT](https://raw.githubusercontent.com/Andorbal/svelte-startup/master/LICENSE)

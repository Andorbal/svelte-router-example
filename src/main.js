/* eslint-env browser */
import App from './App.html';

/* eslint-disable no-unused-vars */
const app = new App({
  target: window.document.querySelector('main'),
});

if (process.env.NODE_ENV !== 'production') {
  // Enable LiveReload
  const host = (location.host || 'localhost').split(':')[0];
  document.write(`<script src="http://${host}:35729/livereload.js?snipver=1"></script>`);
}

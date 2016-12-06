/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import connect from 'connect';
import livereload from 'livereload';
import serveStatic from 'serve-static';
import fs from 'fs';
import path from 'path';

const server = connect();
const basePath = path.resolve(__dirname, '..', 'build');
const indexPath = path.resolve(basePath, 'index.html');
const port = process.env.PORT || '3000';
const staticRoot = process.env.APP_BASE_PATH || '/';

server.use(staticRoot, serveStatic(basePath));
server.use((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(indexPath).pipe(res);
});

console.log(`Listening at localhost:${port}`);
server.listen(port);

const lrserver = livereload.createServer();
lrserver.watch(basePath);

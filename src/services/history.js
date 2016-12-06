import createHistory from 'history/createBrowserHistory';

const history = createHistory({
  basename: process.env.APP_BASE_PATH,
});

export default history;

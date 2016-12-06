import Route from 'route-parser';
import history from './history';

export default (routes) => {
  let content;
  let unlisten;
  let target;

  const createRouteBehavior = (route) => {
    if (typeof route === 'function') {
      /* eslint-disable new-cap */
      return input => (content = new route(input));
    }

    if (typeof route === 'object') {
      if (route.redirect) {
        return () => history.push(route.redirect);
      }
    }

    if (typeof route === 'string') {
      return () => history.push(route);
    }

    return () => { };
  };

  const routeData = Object.keys(routes)
    .map(key => [key, routes[key]])
    .map(([key, value]) => ({
      route: new Route(key),
      behavior: createRouteBehavior(value),
    }));

  const handleRouteChange = (location) => {
    if (content && content.teardown) content.teardown();

    /* eslint-disable guard-for-in, no-restricted-syntax */
    for (let i = 0; i < routeData.length; i += 1) {
      const data = routeData[i].route.match(location.pathname);
      if (data) {
        routeData[i].behavior({ target, data });

        break;
      }
    }
  };

  return {
    start: (location, targetElement) => {
      target = targetElement;
      unlisten = history.listen(handleRouteChange);
      handleRouteChange(history.location);
    },
    teardown: () => {
      if (unlisten) {
        unlisten();
        unlisten = undefined;
      }
    },
  };
};

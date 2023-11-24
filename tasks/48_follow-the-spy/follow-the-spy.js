export function followTheSpy(arraysOfRoutes) {
  let path = [];

  arraysOfRoutes.forEach((currentRoute) => {
    let nextRoute = arraysOfRoutes.find((route) => {
      return route[1] === currentRoute[0];
    });
    if (!nextRoute) {
      path.push(currentRoute[0]);
    }
  });

  while (path.length <= arraysOfRoutes.length) {
    let currentRoute = path[path.length - 1];
    let nextRoute = arraysOfRoutes.find((route) => route[0] === currentRoute);
    path.push(nextRoute[1]);
  }
  return path.join(', ');
}

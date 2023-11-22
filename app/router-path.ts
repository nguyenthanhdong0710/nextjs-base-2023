const routerPath = {
  dashboard: "/dashboard",
  login: "/login",
  signup: "/signup",
};

export default routerPath;

// export const PathMap = (() => {
//   const newPath = routerPath as {
//     [key: string]: string | ((...args: Array<string>) => string);
//   };
//   const map: { [key: string]: boolean } = {};
//   Object.keys(newPath).forEach((key) => {
//     if (typeof newPath[key] === "function") {
//       const value = (newPath[key] as (...args: Array<string>) => string)();
//       map[value] = true;
//     } else {
//       map[newPath[key] as string] = true;
//     }
//   });
//   return map;
// })();

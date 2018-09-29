/ Takes in a params object and returns the object with null/
export default params =>
  Object.keys(params)
    .filter(key => params[key])
    .reduce((acc, curr) => {
      acc[curr] = params[curr];
      return acc;
    }, {});
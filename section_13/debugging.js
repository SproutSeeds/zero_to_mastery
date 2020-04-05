const flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((accumulator, array) => {
  console.log('accumulator', accumulator);
  console.log('array', array);
  debugger;
  return accumulator.concat(array);
}, []);

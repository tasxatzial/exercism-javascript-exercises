// Solution 2

/* Non-recursive and supports max flatten depth.
Will not throw stack overflow error. */

const flattenRec = (arr, depth = Infinity) => {
  return _flatten(arr, [], 0);
  
  function _flatten(arr, flattened, currDepth) {
    if (currDepth > depth) {
      flattened.push(arr);
      return;
    }
    for (const el of arr) {
      if (Array.isArray(el)) {
        _flatten(el, flattened, currDepth + 1)
      } else if (el !== null) {
        flattened.push(el);
      }
    }
    return flattened;
  }
};

export const flatten = (arr, depth = Infinity) => {
  let currDepth = 0;
  let flattened = arr;
  while (currDepth !== depth) {
    flattened = flattenRec(flattened, 1);
    if (flattened.every(el => el !== null && !Array.isArray(el))) {
        break;
    }
    currDepth++;
  }
  return flattened;
};

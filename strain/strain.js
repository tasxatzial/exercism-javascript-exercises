export const keep = (coll, pred) => {
  const newColl = [];
  for (let i = 0; i < coll.length; i++) {
    if (pred(coll[i])) {
      newColl.push(coll[i]);
    }
  }
  return newColl;
};

export const discard = (coll, pred) => {
  const newColl = [];
  for (let i = 0; i < coll.length; i++) {
    if (!pred(coll[i])) {
      newColl.push(coll[i]);
    }
  }
  return newColl;
};

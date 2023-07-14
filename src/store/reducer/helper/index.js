export const sortedArrayByString = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
export const sortedArrayById = (a, b) => b.id - a.id;
export const sortedArrayByNumberPhone = (a, b) => {
  let aNumber = parseInt(a.replace(/\D/g, ""));
  let bNumber = parseInt(b.replace(/\D/g, ""));
  return aNumber - bNumber;
};

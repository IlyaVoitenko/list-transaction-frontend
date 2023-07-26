import moment from "moment";
export const sortedByString = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};
export const sortBySumma = (a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
};
export const sortedArrayByNumberPhone = (a, b) => {
  let aNumber = parseInt(a.replace(/\D/g, ""));
  let bNumber = parseInt(b.replace(/\D/g, ""));
  return aNumber - bNumber;
};
export const sortByDate = (a, b) => {
  const first = moment(a).format("X");
  const second = moment(b).format("X");
  const res = second - first;
  return res;
};

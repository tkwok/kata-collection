'use strict';

module.exports = {
  answer
};

function answer(list) {
  let result = 0;
  if (list.length === 1 || list[0] === 0) { return list[0]; }

  for (let i=0, j=list.length; i<=j; i++) {
    if (list[i] === 0) { result = list[i]; break; }

    if (result === 0) { result = list[i]; }

    if (Math.abs(list[i]) === Math.abs(result)) { result = Math.abs(list[i]); }

    if (Math.sign(list[i]) === 1) {
      if (result === 0 || Math.abs(result) > list[i]) { result = list[i]; }
    } else {
      if (Math.abs(result) > Math.abs(list[i])) { result = list[i]; }
    }
  }
  return result;
}

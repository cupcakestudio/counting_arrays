"use strict";

const countingArr = [];
let counter = 0;
countArray();

function countArray() {
  if (counter < 10) {
    countingArr.unshift(`${counter}`);
    // countingArr.shift(counter);
    counter++;
    console.log(countingArr, counter);
  }
  // countArray();
  // setTimeout(countArray, 500);
  // console.log(countingArr);

  // countArray();
  // else if (countingArr.length === 9) {
  //   countingArr.pop[counter - 1];
  //   console.log(countingArr);
  //   return;
  // }
}

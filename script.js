"use strict";

const countingArr = [];
let counter = 0;
countArray();

function countArray() {
  if (counter < 10) {
    /*unshift takes the 1st element and shifts it, so the incoming element is the new first
     element in the array, it adds elements to the beginning*/
    countingArr.unshift(`${counter}`);
    //put it in console
    console.log(countingArr);
    //increment by 1 (add a new item in array)
    counter++;
    //call countArray with delay
    setTimeout(countArray, 100);
    // countArray();
  } else {
    return;
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

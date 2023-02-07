"use strict";

const countingArr = [];
let counter = 0;
countArray();

function countArray() {
  if (countingArr.length < 9) {
    /*unshift takes the 1st element and shifts it, so the incoming element is the new first
     element in the array, it adds elements to the beginning*/
    countingArr.unshift(`${counter}`);
    //put it in console
    console.log(countingArr);
    //increment by 1 (add a new item in array)
    counter++;
    //call countArray with delay for 1 sec (1000 ms)
    setTimeout(countArray, 1000);
    // countArray();
  }
  //whole else statement ensure that array only will have 9 items,
  // since we both pop items out and unshifts new items into it at the same time
  else {
    //return/remove the last item from the array
    countingArr.pop(`${counter}`);
    //add next counted item into the beginning of the array
    countingArr.unshift(`${counter}`);
    //console log it
    console.log(countingArr);
    //increment by 1
    counter++;
    //call countArray with delay for 1 sec (1000 ms)
    setTimeout(countArray, 1000);
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

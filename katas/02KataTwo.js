'use strict';

var assert = require('assert');

// Given an array A, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
  const stats = {};
  let answer;

  arr.forEach((item, index) => {
    if (stats[item]) {
      stats[item] = stats[item] + 1;
    } else {
      stats[item] = 1;
    }
  });

  Object.keys(stats).forEach(key => {
    if (stats[key] % 2 === 1) {
      answer = key;
    }
  });

  return answer;
}


// Tests

describe('#findOdd()', function () {
  it('should find the int that appears an odd number of times', function () {
    assert.equal(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
    assert.equal(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
    assert.equal(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
    assert.equal(findOdd([10]), 10);
    assert.equal(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
    assert.equal(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);
  });
});
